import { AnalyticsBrowser } from "@segment/analytics-next";
import { segmentKey } from "./config/config";

export const analytics = AnalyticsBrowser.load({
  writeKey: segmentKey,
});
analytics.identify();
