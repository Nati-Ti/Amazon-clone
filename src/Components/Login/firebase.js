// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// const db = app.firestore();
// const auth = firebase.auth();

export const auth = getAuth(app);
export default app;

// export { db, auth};

// export auth = firebase