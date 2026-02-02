import { useDealContext } from "@/contexts/deals-context";
import { useMemo } from "react";

export function useDealsInSpotlight() {
  const { deals, loading } = useDealContext();

  const dealsInSpotlight = useMemo(() => deals.filter(deal => deal.isInSpotlight), [deals]);

  return {
    dealsInSpotlight,
    loading,
  };
}
