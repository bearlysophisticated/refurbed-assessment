import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Deal, DealFilter, DealSorting } from '@/types/deals.types';
import { MOCK_DEALS } from '@/constants/mock-deals';
import { DealContextValue } from "@/contexts/deals-context/DealContext.types";
import {
  DEALS_FILTERING_STRATEGIES,
  DEALS_SORTING_STRATEGIES
} from "@/contexts/deals-context/deals-sorting-filter-strategies";

const DealContext = createContext<DealContextValue | undefined>(undefined);

export function DealProvider({ children }: PropsWithChildren) {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [dealsViewData, setDealsViewData] = useState<Deal[]>([]);
  const [sort, setSort] = useState<DealSorting | undefined>(undefined);
  const [filter, setFilter] = useState<DealFilter | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const loadDeals = () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate async data loading
      setTimeout(() => {
        setDeals(MOCK_DEALS);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load deals'));
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDeals();
  }, []);

  useEffect(() => {
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

    setDealsViewData(manipulatedDeals);
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

