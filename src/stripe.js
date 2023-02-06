import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "./config/config";
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default stripePromise;
