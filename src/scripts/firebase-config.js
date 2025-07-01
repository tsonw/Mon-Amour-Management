import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD841HMHmtZf90-WJruEM5Jre4WagLOyiY",
    authDomain: "mon-amour-manage.firebaseapp.com",
    projectId: "mon-amour-manage-5d822",
    storageBucket: "mon-amour-manage.firebasestorage.app",
    messagingSenderId: "511777334853",
    appId: "1:511777334853:web:fbe373f3376828716b252c",
    measurementId: "G-LEQ0XDXG2N"
};

export const app = initializeApp(firebaseConfig);