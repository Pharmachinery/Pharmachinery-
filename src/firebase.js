import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjv0NlLF02SU5sRQjTXLdA8O2bwcGSmzU",
  authDomain: "pharmachinery-dashboard.firebaseapp.com",
  projectId: "pharmachinery-dashboard",
  storageBucket: "pharmachinery-dashboard.firebasestorage.app",
  messagingSenderId: "658867887597",
  appId: "1:658867887597:web:cb19caad0cd40613aa1be4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

export default app;