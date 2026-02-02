import { AnalyticsEvent } from "@/types/analytics.types";

export interface AnalyticsService {
  logEvent(event: AnalyticsEvent): Promise<void>;
}
