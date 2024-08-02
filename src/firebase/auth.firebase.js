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
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const { email: userEmail, displayName, photoURL } = user;
    return { email: userEmail, displayName, photoURL };
  } 
  catch (error) {
    // Define un objeto con mensajes de error amigables
    const errorMessages = {
      'auth/invalid-email': 'La dirección de correo electrónico no es válida.',
      'auth/user-disabled': 'La cuenta de usuario ha sido deshabilitada.',
      'auth/user-not-found': 'No se encontró una cuenta con este correo electrónico.',
      'auth/wrong-password': 'La contraseña es incorrecta.',
      // Agrega otros errores específicos según sea necesario
    };

    // Obtén el mensaje de error específico o usa uno genérico
    const friendlyErrorMessage = errorMessages[error.code] || 'Se produjo un error inesperado. Por favor, inténtelo de nuevo más tarde.';
    
    // Devuelve un objeto con el error manejado
    return { error: true, message: friendlyErrorMessage };
  }
};

const logoutFirebase = async () => {
  const response = await signOut(auth).then(() => {
    return true
  }).catch((error) => {
    return {error: error}
  });
  return response
}

export {authStateFirebase, createNewUserFirebase, loginFirebase, logoutFirebase}