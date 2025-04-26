// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTKQBCvKhHmXdNyeb32pN2oRZHe14X1N4",
  authDomain: "book-selling-website-48c3a.firebaseapp.com",
  databaseURL: "https://book-selling-website-48c3a-default-rtdb.firebaseio.com", // ✅ cực kỳ quan trọng
  projectId: "book-selling-website-48c3a",
  storageBucket: "book-selling-website-48c3a.appspot.com",
  messagingSenderId: "539255275616",
  appId: "1:539255275616:web:79353910e7a3f197198305"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
