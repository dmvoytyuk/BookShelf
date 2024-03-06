// Рендер информации в модалку
// import { showLoader, hideLoader } from './Services/helpers';
import backendAPI from './Services/api';
import localStorageBooks from '../js/localstorage';
import amazon from '../img/amazon-n.png';
import apple from '../img/apple-n.png';
import { updateBooksCounter } from './updatecounter';
import { auth, db } from './firebase';
import {
  collection,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';

const backdrop = document.querySelector('.backdrop');
const modalWrapper = document.querySelector('.modal-wrapper');
const body = document.querySelector('body');
const btnAddRemove = document.querySelector('.modal-btn-addremove');
const bookAddMsg = document.querySelector('.congrats');
const closeModalButton = document.querySelector('.modal-close');

const book = {
  _id: '',
  title: '',
  author: '',
  list_name: '',
  book_image: '',
  description: '',
  amazon_buy_link: '',
  apple_buy_link: '',
};

export async function renderModal(bookId) {
  try {
    modalWrapper.innerHTML = '';
    bookAddMsg.innerHTML = '';
    const modalData = await backendAPI.getBookDescription(bookId);
    book._id = modalData._id;
    book.title = modalData.title;
    book.author = modalData.author;
    book.list_name = modalData.list_name;
    book.book_image = modalData.book_image;
    book.description = modalData.description;
    book.amazon_buy_link = modalData.buy_links[0].url;
    book.apple_buy_link = modalData.buy_links[1].url;

    const markupBook = markupBooks(modalData);
    modalWrapper.insertAdjacentHTML('beforeend', markupBook);

    manageButton(btnAddRemove, bookId);
    closeModalButton.blur();
    btnAddRemove.addEventListener('click', buttonClickHandler);
    closeModalButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', keydownHandler);
    backdrop.addEventListener('click', clickOutsideHandler);
  } catch (error) {
    console.log('Error fetching modal:', error);
  }
}

export function showModal(id) {
  backdrop.classList.add('modal-open');
  body.classList.add('no-scroll');
  renderModal(id);
}

function markupBooks(modalData) {
  return `
      <img class="modal-img-book" src="${modalData.book_image}" alt="book" />
        
      <div class="modal-book-container-right">
        <div class="modal-book-container">
          <div class="modal-book-info">
            <h3 class="modal-description-title">${modalData.title}</h3>
            <p class="modal-description-author">${modalData.author}</p>
          </div>
          <p class="modal-book-description">${modalData.description}</p>
          <ul class="modal-icons-list">
          <li>
            <a class="modal-book-link" href="${modalData.buy_links[0].url}" target="_blank"><img class='modal-link-icon-amazon' src="${amazon}" alt="" width='62' height='19' 
            /></a>
          </li>
          <li>
            <a class="modal-book-link" href="${modalData.buy_links[1].url}" target="_blank"><img class='modal-link-icon-apple' src="${apple}" alt="" width='33' height='32'
            /></a>
          </li>
          </ul>
        </div>
      </div>`;
}

async function manageButton(btnAddRemove, bookId) {
  if (auth.currentUser) {
    let bookExist = false;
    await getDocs(collection(db, auth.currentUser.uid)).then(books => {
      books.forEach(book => {
        if (book.id === bookId) {
          bookExist = true;
        }
      });
      console.log(bookExist);
      if (bookExist) {
        btnAddRemove.textContent = 'remove from favorite list';
      } else {
        btnAddRemove.textContent = 'add to favorite list';
      }
      btnAddRemove.blur();
    });
  } else {
    if (localStorageBooks.isBookExsist(bookId)) {
      btnAddRemove.textContent = 'remove from favorite list';
      bookAddMsg.classList.add('modal-text-congratulations');
    } else {
      btnAddRemove.textContent = 'add to favorite list';
      bookAddMsg.classList.remove('modal-text-congratulations');
    }
    btnAddRemove.blur();
  }
}
function buttonClickHandler(e) {
  if (btnAddRemove.textContent === 'add to favorite list') {
    addBook(book);
  } else {
    removeBook(book);
  }
}

// ============Додав функції дії=====================
function keydownHandler(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
function clickOutsideHandler(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}
// ==================================================

function closeModal() {
  backdrop.classList.remove('modal-open');
  body.classList.remove('no-scroll');
  btnAddRemove.textContent = '';
  closeModalButton.removeEventListener('click', closeModal);
  btnAddRemove.removeEventListener('click', buttonClickHandler);
  document.removeEventListener('keydown', keydownHandler);
  backdrop.removeEventListener('click', clickOutsideHandler);
}

async function addBook(book) {
  const user = auth.currentUser;
  if (user) {
    await setDoc(doc(db, user.uid, book._id), {
      _id: book._id,
      title: book.title,
      author: book.author,
      list_name: book.list_name,
      book_image: book.book_image,
      description: book.description,
      amazon_buy_link: book.amazon_buy_link,
      apple_buy_link: book.apple_buy_link,
    }).then(() => {
      bookAddMsg.textContent =
        'Сongratulations! You have added the book to favorite books list. To delete, press the button "Remove from the shopping list".';
      manageButton(btnAddRemove, book._id);
    });
  } else {
    localStorageBooks.addBookToFavorites(book);
    updateBooksCounter();
    bookAddMsg.textContent =
      'Сongratulations! You have added the book to books list list. To delete, press the button "Remove from the shopping list".';
  }
}

async function removeBook(book) {
  const user = auth.currentUser;
  if (user) {
    await deleteDoc(doc(db, user.uid, book._id)).then(() => {
      bookAddMsg.textContent = '';
      manageButton(btnAddRemove, book._id);
    });
  } else {
    localStorageBooks.removeBookFromFavorites(book);
    updateBooksCounter();
    bookAddMsg.textContent = '';
    manageButton(btnAddRemove, book._id);
  }
}
