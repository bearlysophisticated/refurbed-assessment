import {
  DEALS_FILTERING_STRATEGIES,
  DEALS_SORTING_STRATEGIES
} from "@/contexts/deals-context/deals-sorting-filter-strategies";
import { Deal, DealFilter, DealSorting } from "@/types/deals.types";

export function sortAndFilterDeals(deals: Deal[], sort?: DealSorting, filter?: DealFilter) {
  let manipulatedDeals;

  if (sort === undefined) {
    manipulatedDeals = [...deals];
  } else {
    manipulatedDeals = [...deals].sort(DEALS_SORTING_STRATEGIES[sort]);
  }

  if (filter !== undefined) {
    manipulatedDeals = manipulatedDeals.filter(deal => {
      return DEALS_FILTERING_STRATEGIES[filter.name](deal, filter.value);
    });
  }

  return manipulatedDeals;
}
