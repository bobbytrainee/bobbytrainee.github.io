import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC37349lG9o2FGFgOauYVTNw8kFdAqMHWc",
    authDomain: "bobby-48db3.firebaseapp.com",
    projectId: "bobby-48db3",
    storageBucket: "bobby-48db3.appspot.com",
    messagingSenderId: "345113816168",
    appId: "1:345113816168:web:f620c0dc14783888aa1fdd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default getFirestore();
