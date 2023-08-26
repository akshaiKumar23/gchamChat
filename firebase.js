import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgyFdPC8QZ169MSwIeh9o8GHU9ca1Z_QA",
  authDomain: "gchamchat.firebaseapp.com",
  projectId: "gchamchat",
  storageBucket: "gchamchat.appspot.com",
  messagingSenderId: "304551234432",
  appId: "1:304551234432:web:0c300fdab26ba03aae0f65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
