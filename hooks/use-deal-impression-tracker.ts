import { useAnalytics } from "@/hooks/use-analytics";
import { useState } from "react";

export function useDealImpressionTracker() {
  const { logEvent } = useAnalytics();
  const [viewableDealIds, setViewableDealIds] = useState<string[]>([]);

  return {
    onViewAbleDealsChangedHandler: ({ newViewableDealIds }: { newViewableDealIds: string[] }) => {
      const dealsJustBecameVisible = newViewableDealIds.filter(dealId => {
        return !viewableDealIds.find(d => d === dealId)
      });

      dealsJustBecameVisible.forEach(dealId => {
        logEvent({ eventName: 'deal_impression', dealId });
      });

      setViewableDealIds(newViewableDealIds);
    }
  };
}
