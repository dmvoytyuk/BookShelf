import './js/shoppinglist';
import './js/header';
import './js/support';
import './js/Services/api';
import './js/Services/helpers';
import './js/localstorage';
import { auth } from './js/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { updateBooksCounter } from './js/updatecounter';
import { updateSignInOutButton } from './js/updateonlogin';

onAuthStateChanged(auth, user => {
  updateSignInOutButton();
  if (user) {
  } else {
    console.log('you have to log in');
  }
});

updateBooksCounter();
