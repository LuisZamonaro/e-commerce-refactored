
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDbeerV0YbodT1hMy-9dMk0fSW--NK2un8",
  authDomain: "e-commerce-7fd47.firebaseapp.com",
  projectId: "e-commerce-7fd47",
  storageBucket: "e-commerce-7fd47.appspot.com",
  messagingSenderId: "973963567228",
  appId: "1:973963567228:web:d4ee675330adcb82b529f9"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}