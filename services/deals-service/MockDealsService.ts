import { MOCK_DEALS } from "@/constants/mock-deals";
import { Deal } from "@/types/deals.types";

export class MockDealsService {
  async fetchDeals() {
    // Simulate async data loading
    return new Promise<Deal[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCK_DEALS);
      }, 500);
    });
  }
}
