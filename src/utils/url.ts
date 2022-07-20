export const getDomain = (url: string | URL) => {
  const urlParts = new URL(url.toString()).hostname.split('.');

  return urlParts
    .slice(0)
    .slice(-(urlParts.length === 4 ? 3 : 2))
    .join('.');
};

export const supportedDomains = new Set(['aliexpress.com']);

export const isDomainSupported = (url: URL) =>
  supportedDomains.has(getDomain(url));

export const getProductId = (url: URL) => {
  const domain = getDomain(url);
  switch (domain) {
    case 'aliexpress.com':
      const [pdpPath] = url.pathname.split('/').slice(-1);
      return pdpPath.replace('.html', '');
    default:
      return `${domain}${url.pathname}`;
  }
};
