import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSCyVI-8yiy4PXmSfJHudViSTCqdCAYkE",
  authDomain: "sme-2022.firebaseapp.com",
  projectId: "sme-2022",
  storageBucket: "sme-2022.appspot.com",
  messagingSenderId: "788763812210",
  appId: "1:788763812210:web:20cb47382f43d59b11bdeb",
  measurementId: "G-8HD9TD3H89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
