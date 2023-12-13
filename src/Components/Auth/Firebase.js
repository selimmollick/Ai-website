

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAbbLlOMxAtfA3lNzqZ0AKfuFBfu6MfwlY",
  authDomain: "protfolio-4ff84.firebaseapp.com",
  projectId: "protfolio-4ff84",
  storageBucket: "protfolio-4ff84.appspot.com",
  messagingSenderId: "685763800609",
  appId: "1:685763800609:web:a4eb50fce57b376332bd60",
  measurementId: "G-P1X2HQLQB2"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;