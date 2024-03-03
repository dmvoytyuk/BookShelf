import './js/shoppinglist';
import './js/header';
import './js/support';
import './js/Services/api';
import './js/Services/helpers';
import './js/localstorage';
import { firebaseConfig, auth, app } from './js/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { updateBooksCounter } from './js/updatecounter';

onAuthStateChanged(auth, user => {
  if (user) {
    // TODO
    // 1. update header
    console.log(user);
  } else {
    console.log('you have to log in');
  }
});

updateBooksCounter();
