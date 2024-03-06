import './js/header';
import './js/sidebarallcategories';
import './js/support';

import { auth, db } from './js/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { topPageBestsellersBooks } from './js/bestsellers';
import { updateBooksCounter } from './js/updatecounter';
import { updateSignInOutButton } from './js/updateonlogin';
import { collection, addDoc, setDoc, doc, getDocs } from 'firebase/firestore';
onAuthStateChanged(auth, user => {
  if (user) {
    console.log(user);
    updateSignInOutButton();
  } else {
    updateSignInOutButton();
  }
});

topPageBestsellersBooks();
updateBooksCounter();

//REFACTOR
document.addEventListener('DOMContentLoaded', function () {
  const scrollUpButton = document.querySelector('.scroll-up');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
      scrollUpButton.classList.add('show');
    } else {
      scrollUpButton.classList.remove('show');
    }
  });

  scrollUpButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

// Initialize Firebase
