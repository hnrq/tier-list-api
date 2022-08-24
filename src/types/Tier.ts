import { Product } from 'puppeteer';

export default interface Tier {
  id: number;
  title: string;
  description: string;
  products: Product[];
}
