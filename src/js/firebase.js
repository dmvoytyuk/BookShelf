import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { collection, addDoc } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyA3tW8aX6TWPWetZLd8M8AEmTkSH31w4PQ',
  authDomain: 'bookshelf-5319d.firebaseapp.com',
  projectId: 'bookshelf-5319d',
  storageBucket: 'bookshelf-5319d.appspot.com',
  messagingSenderId: '1065553942529',
  appId: '1:1065553942529:web:c3ec362a6a1c4d5d70c800',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// setPersistence(auth, browserLocalPersistence);

const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      window.location.reload();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ' ', errorMessage);
    });
};

const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
};

export const signUserOut = async e => {
  signOut(auth)
    .then(() => {
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
};

export async function signUserUp(e) {
  e.preventDefault();
  const userName = e.target.elements.name.value;
  const userEmail = e.target.elements.email.value;
  const userPassword = e.target.elements.email.value;
  //TODO VALIDATION
  await signUp(userEmail, userPassword).then(() => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    });
  });
}

export function signUserIn(e) {
  e.preventDefault();
  const userEmail = e.target.elements.email.value;
  const userPassword = e.target.elements.email.value;
  signIn(userEmail, userPassword);
}
