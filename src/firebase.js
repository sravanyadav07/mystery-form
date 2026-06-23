import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCru0DrkXHm_JagHUe28a478-2MAeRdS6Q",
  authDomain: "mystery-form.firebaseapp.com",
  projectId: "mystery-form",
  storageBucket: "mystery-form.firebasestorage.app",
  messagingSenderId: "158466388630",
  appId: "1:158466388630:web:cf95f809b626005a8788b7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;