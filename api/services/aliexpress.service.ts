import Browser from '../models/Browser';

export interface Product {
  id: string;
  title: string;
  categoryId: string;
  store: string;
  images: string[];
  ratings: {
    totalStar: number;
    averageStar: number;
    totalStartCount: number;
    fiveStarCount: number;
    fourStarCount: number;
    threeStarCount: number;
    twoStarCount: number;
    oneStarCount: number;
  };
  currency: string;
  originalPrice: {
    min: number;
    max: number;
  };
  salePrice: {
    min: number;
    max: number;
  };
}

const formatProduct = (data: Record<string, any>): Product => ({
  id: data.actionModule.productId,
  title: data.titleModule.subject,
  categoryId: data.actionModule.categoryId,
  store: data.storeModule.storeName,
  ratings: {
    totalStar: 5,
    averageStar: data.titleModule.feedbackRating.averageStar,
    totalStartCount: data.titleModule.feedbackRating.totalValidNum,
    fiveStarCount: data.titleModule.feedbackRating.fiveStarNum,
    fourStarCount: data.titleModule.feedbackRating.fourStarNum,
    threeStarCount: data.titleModule.feedbackRating.threeStarNum,
    twoStarCount: data.titleModule.feedbackRating.twoStarNum,
    oneStarCount: data.titleModule.feedbackRating.oneStarNum,
  },
  images: (data.imageModule && data.imageModule.imagePathList) || [],
  currency: data.webEnv.currency,
  originalPrice: {
    min: data.priceModule.minAmount.value,
    max: data.priceModule.maxAmount.value,
  },
  salePrice: {
    min: data.priceModule.minActivityAmount
      ? data.priceModule.minActivityAmount.value
      : data.priceModule.minAmount.value,
    max: data.priceModule.maxActivityAmount
      ? data.priceModule.maxActivityAmount.value
      : data.priceModule.maxAmount.value,
  },
});

export const getProduct = async (productId: string) => {
  const page = await Browser.createPage(
    `https://www.aliexpress.com/item/${productId}.html`,
    { waitUntil: 'domcontentloaded' }
  );
  // @ts-expect-error
  const { data } = await page.evaluate(() => runParams);
  page.close();
  return formatProduct(data);
};
