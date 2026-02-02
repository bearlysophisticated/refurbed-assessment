import { AnalyticsService } from "@/services/analytics/AnalyticsService";
import { AnalyticsEvents } from "@/types/analytics.types";

export class MockAnalyticsService implements AnalyticsService {
  async logEvent({ eventName, ...extras}: AnalyticsEvents) {
    console.log('Analytics event:', {
      name: eventName,
      extras
    });
  }
}
