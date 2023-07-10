// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUaP8QBVsWvks0_GE4kAuIR1_3ZdAgz2k",
  authDomain: "erps-23b86.firebaseapp.com",
  projectId: "erps-23b86",
  storageBucket: "erps-23b86.appspot.com",
  messagingSenderId: "815771091706",
  appId: "1:815771091706:web:20692a15f0039e3611bf43",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
