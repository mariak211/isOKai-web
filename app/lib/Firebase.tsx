
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACW-4ipISJv2f95AM8ojuBbBd5pKeABIM",
  authDomain: "isokai.firebaseapp.com",
  projectId: "isokai",
  storageBucket: "isokai.firebasestorage.app",
  messagingSenderId: "635829202995",
  appId: "1:635829202995:web:ce22df8a8858fe07003346",
  measurementId: "G-BVYLV66ED1"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };
