import { Product } from 'puppeteer';

export default interface Rank {
  id: number;
  title: string;
  description: string;
  products: Product[];
  productOrder: number[];
}
