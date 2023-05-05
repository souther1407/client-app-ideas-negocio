import { AnalyticsBrowser } from "@segment/analytics-next";
import { segmentKey } from "./config/config";

const analytics = AnalyticsBrowser.load({ writeKey: segmentKey });

export default analytics;
