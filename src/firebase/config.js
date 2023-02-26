// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCSGPoBx5CWQMBJ3-sysROhE0i9C3E9AM0",
  authDomain: "reactnativehw-7e763.firebaseapp.com",
  projectId: "reactnativehw-7e763",
  storageBucket: "reactnativehw-7e763.appspot.com",
  messagingSenderId: "576328941025",
  appId: "1:576328941025:web:f89e7318ea66f6b0ac26a0",
  measurementId: "G-9WT901WBRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
