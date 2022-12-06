// import firebase from 'firebase/compat/app';
// import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGndTS62Kc99BLWzUPyXb-qba4aoaFRh8",
  authDomain: "admin-form-fb008.firebaseapp.com",
  projectId: "admin-form-fb008",
  storageBucket: "admin-form-fb008.appspot.com",
  messagingSenderId: "505067535360",
  appId: "1:505067535360:web:426da653f876b98c0bece5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

