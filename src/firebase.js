import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfXW-pxn_icNG-uIsdyRQr0ttMukYt92I",
  authDomain: "twitter-clone-49e8e.firebaseapp.com",
  projectId: "twitter-clone-49e8e",
  storageBucket: "twitter-clone-49e8e.appspot.com",
  messagingSenderId: "809290059000",
  appId: "1:809290059000:web:e7bdd9966095712b073f0d",
  measurementId: "G-38X3Z0GKFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;