import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Deal, DealFilter, DealSorting } from '@/types/deals.types';
import { DealContextValue } from "@/contexts/deals-context/DealContext.types";
import { sortAndFilterDeals } from "@/utils/deals-sorting-filter.helper";
import { MockDealsService } from "@/services/deals-service/MockDealsService";

const DealContext = createContext<DealContextValue | undefined>(undefined);

export function DealProvider({ children }: PropsWithChildren) {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [dealsViewData, setDealsViewData] = useState<Deal[]>([]);
  const [sort, setSort] = useState<DealSorting | undefined>(undefined);
  const [filter, setFilter] = useState<DealFilter | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const loadDeals = async () => {
    setLoading(true);
    setError(null);

    try {
      const dealsService = new MockDealsService();
      const dealsData = await dealsService.fetchDeals()
      setDeals(dealsData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load deals'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDeals();
  }, []);

  useEffect(() => {
    setDealsViewData(sortAndFilterDeals(deals, sort, filter));
  }, [sort, deals, filter]);

  const getDealById = (id: string): Deal | undefined => {
    return deals.find(deal => deal.id === id);
  };

  const value: DealContextValue = {
    deals: dealsViewData,
    loading,
    error,
    getDealById,
    applySorting: setSort,
    applyFilter: setFilter,
  };

  return (
    <DealContext.Provider value={value}>
      {children}
    </DealContext.Provider>
  );
}

export function useDealContext(): DealContextValue {
  const context = useContext(DealContext);

  if (context === undefined) {
    throw new Error('useDealContext must be used within a DealProvider');
  }

  return context;
}

