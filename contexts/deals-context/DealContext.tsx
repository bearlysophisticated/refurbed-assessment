import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Deal } from '@/types/deals.types';
import { MOCK_DEALS } from '@/constants/mock-deals';

interface DealContextValue {
  deals: Deal[];
  loading: boolean;
  error: Error | null;
  getDealById: (id: string) => Deal | undefined;
}

const DealContext = createContext<DealContextValue | undefined>(undefined);

interface DealProviderProps {
  children: ReactNode;
}

export function DealProvider({ children }: DealProviderProps) {
  const [deals, setDeals] = useState<Deal[]>([]);
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

  const getDealById = (id: string): Deal | undefined => {
    return deals.find(deal => deal.id === id);
  };

  const value: DealContextValue = {
    deals,
    loading,
    error,
    getDealById,
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

