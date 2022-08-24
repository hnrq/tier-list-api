import { Product } from 'puppeteer';
import type Tier from './Tier';

export default interface TierList {
  id: string;
  title: string;
  tiers: Tier[];
  unranked: Product[];
}
