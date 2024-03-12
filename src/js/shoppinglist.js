import { renderTitle } from '../js/Services/helpers';
import localStorageBooks from '../js/localstorage';
import sprite from '../img/symbol-defs.svg';
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
import { getAuth } from 'firebase/auth';

const shoppingList = document.querySelector('.cart-list');
const cartEmptyMsg = document.querySelector('.cart-empty-container');
const paginationList = document.querySelector('.pagination-list');
const buttonsContainer = document.querySelector('.cart-buttons-container');

renderTitle('.shoppinglist-title', 'Favorite Books');
function renderShoppingList(books) {
  shoppingList.innerHTML = '';
  const hmtlBookList = books
    .map(book => {
      return `<li class="cart-item">
      <img
        class="cart-item-img"
        src="${book.book_image}"
        alt="book image"
        width="100"
        height="142"
      />
      <div class="cart-item-content">
        <div class="cart-item-content-top">
          <div class="cart-item-content-top-left">
            <h3 class="cart-item-title">${book.title}</h3>
            <p class="cart-item-category">${book.list_name}</p>
          </div>
          <button data-id="${book._id}" class="cart-item-del-button">
            <svg class="cart-item-del-button-icon" width="14" height="14">
              <use href="${sprite}#icon-delete-shoppinglist"></use>
            </svg>
          </button>
        </div>
        <div class="cart-item-content-middle">
          <p class="cart-item-content-desc">
            ${book.description}
          </p>
          <div class="cart-item-content-bottom">
            <p class="cart-item-author">${book.author}</p>
            <div class="cart-items-links">
              <a
                class="cart-items-link"
                target="_blank"
                href="${book.amazon_buy_link}"
              >
                <img
                  class="cart-items-amazon"
                  src="${amazon}"
                  alt="shopping cart empty"
                  height="11"
                  width="32"
                />
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${book.apple_buy_link}"
              >
                <img
                  class="cart-items-apple"

                  src="${apple}"
                  alt="shopping cart empty"
                  height="16"
                  width="16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`;
    })
    .join('');
  shoppingList.insertAdjacentHTML('beforeend', hmtlBookList);
}

export let pageData = {
  books: [],
  currentPage: 0,
  nextPage: 0,
  prevPage: 0,
  totalBooks: 0,
  totalPages: 0,
  booksPerPage: 0,
  buttonsPerPage: 0,
  totalButtonsGroups: 0,
  pagesOnLastGroup: 0,
};

// const auth = getAuth();

export async function renderShoppingListPage(auth, pageData) {
  paginationList.removeEventListener('click', buttonClickHandler);
  shoppingList.removeEventListener('click', removeBookFromList);
  const user = auth.currentUser;
  const cacheBooks = [];
  if (user) {
    await getDocs(collection(db, user.uid)).then(books => {
      books.forEach(book => {
        cacheBooks.push(book.data());
      });
      renderShoppingAndPagination(pageData, cacheBooks);
    });
  } else {
    const books = localStorageBooks.getAllBooks();
    renderShoppingAndPagination(pageData, books);
  }
}

function renderShoppingAndPagination(pageData, books) {
  shoppingList.innerHTML = '';
  paginationList.innerHTML = '';
  pageData.totalBooks = books.length;
  pageData.booksPerPage = getBooksPerPage();
  pageData.totalPages = getTotalPages(
    pageData.totalBooks,
    pageData.booksPerPage
  );
  pageData.books = createBooksListsPerPage(
    books,
    pageData.booksPerPage,
    pageData.totalPages
  );
  pageData.buttonsPerPage = getButtonsPerPage();
  pageData.totalButtonsGroups = Math.ceil(
    pageData.totalPages / pageData.buttonsPerPage
  );

  pageData.pagesOnLastGroup = pageData.totalPages % pageData.totalButtonsGroups;

  if (pageData.totalBooks > 0) {
    if (pageData.totalPages === 1) {
      renderShoppingList(pageData.books[0]);
    }

    if (pageData.totalPages > 1) {
      renderShoppingList(pageData.books[pageData.currentPage]);
      renderPaginationButtons(pageData, paginationList);
      makeActiveButton(pageData.currentPage);
      const currentButton = document.querySelector('.active');
      moveButtonToCenter(currentButton);
      paginationList.addEventListener('click', buttonClickHandler);
    }
    shoppingList.addEventListener('click', removeBookFromList);
  } else {
    cartEmptyMsg.classList.remove('is-hidden');
  }
}

function renderPaginationButtons(pageData, paginationList) {
  paginationList.innerHTML = '';

  if (pageData.totalPages > 1) {
    for (let i = 0; i < pageData.totalPages; i++) {
      paginationList.insertAdjacentHTML(
        'beforeend',
        `<li><button data-page="${i}">${i + 1}</button></li>`
      );
    }
  }
}

function buttonClickHandler(e) {
  const clickedElement = e.target.closest('button');
  if (clickedElement) {
    const pageButton = clickedElement.dataset.page;
    if (pageButton) {
      renderShoppingList(pageData.books[pageButton]);
      makeActiveButton(pageButton);
      pageData.currentPage = pageButton;
      moveButtonToCenter(clickedElement);
    }
  }
}

function moveButtonToCenter(clickedElement) {
  const buttonSize = clickedElement.getBoundingClientRect();
  const containerSize = buttonsContainer.getBoundingClientRect();
  const sliderSize = paginationList.getBoundingClientRect();

  const centerOfContainer = containerSize.width / 2;
  const centerOfButton = buttonSize.width / 2;
  const buttonPosition = buttonSize.left;
  const sliderPosition = sliderSize.left;

  const moveTo =
    parseInt(centerOfContainer) -
    parseInt(buttonPosition) -
    parseInt(centerOfButton) +
    parseInt(sliderPosition);
  paginationList.style.translate = `${moveTo}px 0`;
}

function removeBookFromList(e) {
  if (e.target.closest('.cart-item-del-button') !== null) {
    const bookId = e.target.closest('.cart-item-del-button').dataset.id;
    removeBook(auth, bookId);
  }
}

async function removeBook(auth, bookId) {
  const user = auth.currentUser;
  if (user) {
    await deleteDoc(doc(db, user.uid, bookId)).then(() => {
      if (
        parseInt(pageData.currentPage) === parseInt(pageData.totalPages) - 1 &&
        pageData.books[pageData.currentPage].length === 1
      ) {
        if (pageData.currentPage >= 1) {
          pageData.currentPage -= 1;
        }
      }
      renderShoppingListPage(auth, pageData);
    });
  } else {
    localStorageBooks.removeBookFromFavorites(bookId);
    updateBooksCounter();
    if (
      parseInt(pageData.currentPage) === parseInt(pageData.totalPages) - 1 &&
      pageData.books[pageData.currentPage].length === 1
    ) {
      if (pageData.currentPage >= 1) {
        pageData.currentPage -= 1;
      }
    }
    renderShoppingListPage(auth, pageData);
  }
}

function isMobile() {
  const windowWidth = window.innerWidth;
  return windowWidth < 767;
}

function getBooksPerPage() {
  return isMobile() ? 4 : 3;
}

function getButtonsPerPage() {
  return isMobile() ? 2 : 3;
}

function getTotalPages(totalBooks, booksPerPage) {
  return Math.ceil(totalBooks / booksPerPage);
}

function makeActiveButton(currentPage) {
  const currentButton = document.querySelector('.active');
  currentButton?.classList.remove('active');
  const activeButton = document.querySelector(`[data-page="${currentPage}"]`);
  activeButton.classList.add('active');
}

function createBooksListsPerPage(books, booksPerPage, totalPages) {
  let booksPages = [];
  for (let i = 0; i < totalPages; i++) {
    booksPages[i] = books.splice(0, booksPerPage);
  }
  return booksPages;
}

// for (let i = 0; i < 60; i++) {
//   const book = {
//     _id: `${i}`,
//     title: `${i}`,
//     author: 'Michelle Zauner',
//     list_name: 'Paperback Nonfiction',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg',
//     description:
//       'The daughter of a Korean mother and Jewish American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.',
//     amazon_buy_link: 'https://www.amazon.com/dp/0593379853?tag=NYTBSREV-20',
//     apple_buy_link: 'https://goto.applebooks.apple/9781984896391?at=10lIEQ',
//   };

//   localStorageBooks.addBookToFavorites(book);
// }

// renderShoppingListPage(auth, pageData);