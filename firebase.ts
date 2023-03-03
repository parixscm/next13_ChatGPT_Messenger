import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxi0Qdh1Jt-vXa1v6dIL27R31wFpos1As",
  authDomain: "chatgpt-messenger-e20c7.firebaseapp.com",
  projectId: "chatgpt-messenger-e20c7",
  storageBucket: "chatgpt-messenger-e20c7.appspot.com",
  messagingSenderId: "195157716750",
  appId: "1:195157716750:web:51c0bb3bb704b8a763315f",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
