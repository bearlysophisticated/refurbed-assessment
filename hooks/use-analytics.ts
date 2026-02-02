import { MockAnalyticsService } from "@/services/analytics/MockAnalyticsService";
import { AnalyticsEvents } from "@/types/analytics.types";

export function useAnalytics() {
  const analyticsService = new MockAnalyticsService();
  return {
    logEvent: (event: AnalyticsEvents) => {
      analyticsService.logEvent(event)
    }
  };
}
