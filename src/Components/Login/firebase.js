import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGSrmHRTXs7VZCfW1lHh1LlSvvo4-vQn8",
    authDomain: "clone-14c9f.firebaseapp.com",
    projectId: "clone-14c9f",
    storageBucket: "clone-14c9f.appspot.com",
    messagingSenderId: "183551437134",
    appId: "1:183551437134:web:00c60e10f022db989b161f",
    measurementId: "G-KZJSKTR3HS"
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