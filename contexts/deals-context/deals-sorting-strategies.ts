import { Deal, DealSorting } from "@/types/deals.types";

export const DEALS_SORTING_STRATEGIES: Record<DealSorting, (a: Deal, b: Deal) => number> = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'score-asc': (a, b) => a.refurbedScore - b.refurbedScore,
  'score-desc': (a, b) => b.refurbedScore - a.refurbedScore,
};
