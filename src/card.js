import './js/header';
import './js/support';
import './js/Services/api';
import './js/Services/helpers';
import './js/localstorage';
import './js/shoppinglist';
import { auth } from './js/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { updateBooksCounter } from './js/updatecounter';
import { updateSignInOutButton } from './js/updateonlogin';
import { renderShoppingListPage, pageData } from './js/shoppinglist';

onAuthStateChanged(auth, user => {
  updateSignInOutButton();
  if (user) {
    renderShoppingListPage(auth, pageData);
  } else {
    renderShoppingListPage(auth, pageData);
    // console.log('you have to log in');
  }
});

updateBooksCounter();
