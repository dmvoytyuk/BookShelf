import './js/header';
import './js/sidebarallcategories';
import './js/support';

import { auth } from './js/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { topPageBestsellersBooks } from './js/bestsellers';
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
