// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDAcDSgb8QfqQHnp_fr6wBZXv3QL_g63eQ",
  authDomain: "newproduct-544a3.firebaseapp.com",
  databaseURL: "https://newproduct-544a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "newproduct-544a3",
  storageBucket: "newproduct-544a3.appspot.com",
  messagingSenderId: "939687056981",
  appId: "1:939687056981:web:5d3da288f18d92d702a6dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
