import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import appFirebase from "./config.firebase";


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(appFirebase);

const authStateFirebase = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { email, displayName, photoURL } = user;
          resolve({ email, displayName, photoURL });
        } else {
          resolve(null); // No hay usuario autenticado
        }
      }, reject);
  
      // Cleanup subscription on unmount
      return unsubscribe;
    });
  };

const createNewUserFirebase = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

const loginFirebase = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const {email, displayName , photoURL } = user;
            return {email, displayName, photoURL}
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return {errorCode, errorMessage}
        });
    return response;
}

const logoutFirebase = async () => {
  const response = await signOut(auth).then(() => {
    return true
  }).catch((error) => {
    return {error: error}
  });
  return response
}

export {authStateFirebase, createNewUserFirebase, loginFirebase, logoutFirebase}