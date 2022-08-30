import Product from './Product';
import type Rank from './Rank';

export default interface TierList {
  id: string;
  title: string;
  description?: string;
  tiers: Rank[];
  unranked: Product[];
}
