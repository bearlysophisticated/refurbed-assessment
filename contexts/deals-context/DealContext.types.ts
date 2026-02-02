import { Deal, DealSorting } from "@/types/deals.types";

export interface DealContextValue {
  deals: Deal[];
  loading: boolean;
  error: Error | null;
  getDealById: (id: string) => Deal | undefined;
  applySorting: (sort?: DealSorting) => void;
}
