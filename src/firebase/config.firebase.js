// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMjj01JaEkstBk2kzQ9kBcNNPwUsuSBB8",
  authDomain: "ar-system-b8616.firebaseapp.com",
  projectId: "ar-system-b8616",
  storageBucket: "ar-system-b8616.appspot.com",
  messagingSenderId: "185436444558",
  appId: "1:185436444558:web:0ce1ad2e5b0809b89df6df"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;