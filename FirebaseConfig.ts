import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcxOzSaRtjajX184_e4zGAiU5nqToL4ZQ",
  authDomain: "fitnessapp-ec26d.firebaseapp.com",
  projectId: "fitnessapp-ec26d",
  storageBucket: "fitnessapp-ec26d.appspot.com",
  messagingSenderId: "351616688699",
  appId: "1:351616688699:web:9dfca2437ac6d17597b21e"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);