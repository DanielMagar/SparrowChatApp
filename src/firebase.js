// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwIAYOXi0-s_jRELvmd6892gf5wXSG3SA",
  authDomain: "sparrow-chat-f6365.firebaseapp.com",
  projectId: "sparrow-chat-f6365",
  storageBucket: "sparrow-chat-f6365.appspot.com",
  messagingSenderId: "173223335389",
  appId: "1:173223335389:web:4c890b3924e9a8b0499234",
  measurementId: "G-RFXH459SYM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
