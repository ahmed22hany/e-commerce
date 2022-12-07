import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjjJ1XLYv0KEqfXWelIQ_lzmbxGdlMUMs",
    authDomain: "e-commerce-6e4c4.firebaseapp.com",
    projectId: "e-commerce-6e4c4",
    storageBucket: "e-commerce-6e4c4.appspot.com",
    messagingSenderId: "602202905525",
    appId: "1:602202905525:web:d34674a34a8589ed3257fc"
};


const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase)


export { initFirebase }