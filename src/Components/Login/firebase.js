import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArHeuf1YYZph5Kfo8p-a-qSG7xNLpTD4M",
    authDomain: "clone-6fc62.firebaseapp.com",
    projectId: "clone-6fc62",
    storageBucket: "clone-6fc62.appspot.com",
    messagingSenderId: "433846804221",
    appId: "1:433846804221:web:ef0bfda6b4b89dd9b5e894",
    measurementId: "G-BM25318KFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const db = firebase.firestore(); 
// const auth = firebase.auth();

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
// export const db = getFirestore(app);

export const auth = getAuth(app);
export default app;

// export { db, auth};

// export auth = firebase