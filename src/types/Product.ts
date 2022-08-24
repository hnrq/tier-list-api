export default interface Product {
  id: string;
  title: string;
  category_id: string;
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
  original_price: {
    min: number;
    max: number;
  };
  sale_price: {
    min: number;
    max: number;
  };
}
