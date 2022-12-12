// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYv_nYxhkvIdckkkdLP1buk9egQp45ELA",
  authDomain: "test-project-55250.firebaseapp.com",
  projectId: "test-project-55250",
  storageBucket: "test-project-55250.appspot.com",
  messagingSenderId: "241389573179",
  appId: "1:241389573179:web:7673aa3e43468dbc69781e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);