import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderTitle(containerClass, title) {
  const container = document.querySelector(containerClass);
  const words = title.split(' ');
  const lastWord = words[words.length - 1];
  words.pop();
  title = words.join(' ');
  container.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="page-title">${title} <span class="page-title-highlight">${lastWord}</span></h1>`
  );
}

export function bookTemplate({ title, author, book_image, _id }) {
  return `<li class="book-category-item" data-id="${_id}">
    <div class = "img-cover">
      <img class="book-category-image" src="${book_image}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${title}</h3>
      <p class = "author-name"> ${author}</p>
    </div>
 </li>`;
}

export function scrollTitleUp() {
  const mainTitle = document.querySelector('h1');
  mainTitle.scrollIntoView({
    behavior: 'instant',
    block: 'center',
    inline: 'nearest',
  });
}

export function showLoader() {
  const loader = document.querySelector('.loader-container');
  const scrollUpButton = document.querySelector('.scroll-up');
  loader.classList.remove('is-hidden-loader');
  scrollUpButton.classList.remove('show');
}

export function hideLoader() {
  const loader = document.querySelector('.loader-container');
  loader.classList.add('is-hidden-loader');
}
