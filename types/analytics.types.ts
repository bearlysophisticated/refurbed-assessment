export type AnalyticsEventName = 'deal_impression' | 'deal_click';

export type AnalyticsEvents = DealImpressionEvent | DealClickEvent;

interface AnalyticsEvent {
  eventName: AnalyticsEventName;
}

export type DealImpressionEvent = AnalyticsEvent & {
  eventName: 'deal_impression';
  dealId: string;
};

export type DealClickEvent = AnalyticsEvent & {
  eventName: 'deal_click';
  dealId: string;
};
