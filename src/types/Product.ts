export default interface Product {
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
  salePrice?: {
    min: number;
    max: number;
  };
}
