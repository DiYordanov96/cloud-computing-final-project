import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBDOcgC8tQtKdKU6P9o70DLhmv_hd76rHc",
  authDomain: "quicktask-5a2e0.firebaseapp.com",
  projectId: "quicktask-5a2e0",
  storageBucket: "quicktask-5a2e0.appspot.com",
  messagingSenderId: "187792933211",
  appId: "1:187792933211:web:f26bdf207e50c9786a1a7e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
