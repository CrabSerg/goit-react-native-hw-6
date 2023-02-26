// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCM8LSxxISvwWOK8kTxuxpMFbGnBzGAi2Q",
  authDomain: "base-aa051.firebaseapp.com",
  projectId: "base-aa051",
  storageBucket: "base-aa051.appspot.com",
  messagingSenderId: "260474993916",
  appId: "1:260474993916:web:94617208e51ffc10c26b79",
  measurementId: "G-GDSJPJBKC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
