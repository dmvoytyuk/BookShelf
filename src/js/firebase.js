import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { setPersistence } from 'firebase/auth';
import { firebaseConfig } from './js/firebase';
import { browserLocalPersistence } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { verifyBeforeUpdateEmail } from 'firebase/auth';
import { updateEmail } from 'firebase/auth';
import { deleteUser } from 'firebase/auth';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

// signInWithEmailAndPassword(auth, 'asd@asd.com', '123456')
//   .then(userCredential => {
//     console.log('login ok');
//     console.log(auth.currentUser);
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);
//   });

// .then(() => {
//   console.log(auth.currentUser);
//   updateEmail(auth.currentUser, 'zxc@asd.com');
//   // console.log(auth.currentUser);
// });

// deleteUser(user)
//   .then(() => {
//     console.log('deleted');
//   })
//   .catch(error => {
//     console.log(error);
//   });

// setTimeout(() => {}, 500);

// onAuthStateChanged(user => {});

// console.log(auth);

// signInWithEmailAndPassword(auth, 'asd@asd.com', '123456')
//   .then(userCredential => {
//     console.log('login ok');
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);
//   });

// createUserWithEmailAndPassword(auth, 'asd@asd.com', '123456')
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, ' ', errorMessage);
//   });

// signInWithEmailAndPassword(auth, 'asd@asd.com', '123456')
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     localStorage.setItem('uid', user.uid);
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);
//   });

// //
// console.log(auth);
