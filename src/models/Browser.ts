import * as puppeteer from 'puppeteer';

class Browser implements IBrowser {
  private static blockedRequestTypes = ['font', 'image', 'stylesheet'];

  private browser: puppeteer.Browser;
  private readonly TIMEOUT: number;
  private readonly USER_AGENT = 'INSERT_USERAGENT';

  constructor(_timeout: number = 30000) {
    this.TIMEOUT = _timeout;

    (async () => {
      await this.init();
    })();
  }

  public async getInstance(): Promise<puppeteer.Browser> {
    return this.browser;
  }

  public async createPage(
    URL: string,
    options: puppeteer.WaitForOptions = { waitUntil: 'load' }
  ): Promise<puppeteer.Page> {
    const page = await this.browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      hasTouch: false,
      isLandscape: false,
      isMobile: false,
    });

    await page.setUserAgent(this.USER_AGENT);
    await page.setJavaScriptEnabled(true);
    await page.setDefaultNavigationTimeout(this.TIMEOUT);

    //skips css fonts and images for performance and efficiency
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (Browser.blockedRequestTypes.includes(req.resourceType())) {
        req.abort();
      } else req.continue();
    });

    try {
      await page.goto(URL, options);
    } catch (err) {
      await page.close();
      throw err;
    }

    return page;
  }

  private async init(
    headless: boolean = true,
    slowdown: number = 0,
    devTools: boolean = false
  ) {
    console.log(`Puppeteer browser init. Timeout set to: ${this.TIMEOUT}`);
    this.browser = await this.startBrowser(headless, slowdown, devTools);

    this.browser.on('disconnected', async () => {
      console.error('Puppeteer browser crashed, Restarting browser.');
      await this.releaseBrowser();
      if (this.browser && this.browser.process() != null)
        this.browser.process()?.kill('SIGINT');
      await this.init();
    });
  }

  private async releaseBrowser() {
    console.warn('Puppeteer browser releasing and closing.');
    if (this.browser) await this.browser.close();
  }

  private async startBrowser(
    headless: boolean,
    slowdown: number,
    devTools: boolean
  ): Promise<puppeteer.Browser> {
    console.log(
      `Puppeteer browser starting up with slowdown set to: ${slowdown}`
    );

    return await puppeteer.launch({
      headless: headless,
      devtools: devTools,
      ignoreHTTPSErrors: true,
      slowMo: slowdown,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
      ],
    });
  }
}

export interface IBrowser {
  getInstance(): Promise<puppeteer.Browser>;
  createPage(
    URL: string,
    options: puppeteer.WaitForOptions
  ): Promise<puppeteer.Page>;
}

export default new Browser();
