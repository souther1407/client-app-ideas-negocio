export const URL = import.meta.env.VITE_URL;
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
export const FIREBASE = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  proyectId: import.meta.env.VITE_FIREBASE_PROYECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
  secretKey: import.meta.env.VITE_ENCRYPT_SECRET,
};

export const segmentKey = import.meta.env.VITE_SEGMENT_KEY;
