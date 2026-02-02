import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Deal, DealSorting } from '@/types/deals.types';
import { MOCK_DEALS } from '@/constants/mock-deals';
import { DealContextValue } from "@/contexts/deals-context/DealContext.types";
import { DEALS_SORTING_STRATEGIES } from "@/contexts/deals-context/deals-sorting-strategies";

const DealContext = createContext<DealContextValue | undefined>(undefined);

export function DealProvider({ children }: PropsWithChildren) {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [dealsViewData, setDealsViewData] = useState<Deal[]>([]);
  const [sort, setSort] = useState<DealSorting | undefined>(undefined);
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
    if (sort === undefined) {
      setDealsViewData(deals);
      return;
    }

    const sortedDeals = [...deals].sort(DEALS_SORTING_STRATEGIES[sort]);
    setDealsViewData(sortedDeals);
  }, [sort, deals]);

  const getDealById = (id: string): Deal | undefined => {
    return deals.find(deal => deal.id === id);
  };

  const value: DealContextValue = {
    deals: dealsViewData,
    loading,
    error,
    getDealById,
    applySorting: setSort,
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

