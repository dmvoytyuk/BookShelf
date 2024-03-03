import { showLoader, hideLoader } from './Services/helpers';
import backendAPI from './Services/api';
import { renderBestBooks } from './bestsellers';
import { renderCategoryPage } from './categorypage';
import { scrollTitleUp } from './Services/helpers';

const categorySelectors = {
  categoryContainer: document.querySelector('.sidebar-category-container'),
  categoryList: document.querySelector('.sidebar-category-list'),
  allCategory: document.querySelector('.all-category'),
};

/**
 |============================
 | Розмітка списку категорій
 |============================
*/

function categoryMarkup(data) {
  data.sort((a, b) => a.list_name.localeCompare(b.list_name));
  const result = data
    .map(
      item =>
        `<li class='sidebar-category-item' data-source="${item.list_name}">${item.list_name}</li>`
    )
    .join('');
  return result;
}

(async () => {
  try {
    const bestBooksContainer = document.querySelector('.bestsellers-container');
    bestBooksContainer.innerHTML = '';
    showLoader();
    const categoryData = await backendAPI.getCategoryList();
    const markup = categoryMarkup(categoryData);
    categorySelectors.categoryList.insertAdjacentHTML('beforeend', markup);
    hideLoader();
  } catch (error) {
    console.log(error);
  }
})();

/**
 |============================
 | Слухачі подій
 |============================
*/

categorySelectors.allCategory.addEventListener('click', async event => {
  try {
    const bestBooksContainer = document.querySelector('.bestsellers-container');
    bestBooksContainer.innerHTML = '';
    showLoader();
    const bestBooksData = await backendAPI.getBestSellers();
    renderBestBooks(bestBooksData);
    hideLoader();
    scrollTitleUp();
  } catch (error) {
    console.log(error);
  }
});

categorySelectors.categoryList.addEventListener('click', async event => {
  if (event.target.classList.contains('sidebar-category-item')) {
    const category = event.target.dataset.source;

    const categoryItems = document.querySelectorAll('.sidebar-category-item');
    categoryItems.forEach(item => {
      item.classList.remove('category-active');
    });

    event.target.classList.add('category-active');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const bestBooksContainer = document.querySelector('.bestsellers-container');
    bestBooksContainer.innerHTML = '';
    showLoader();
    try {
      if (!event.target.classList.contains('all-category')) {
        const categoryData = await backendAPI.getSelectedCategory(category);
        renderCategoryPage(categoryData, category);
        hideLoader();
        scrollTitleUp();
      }
    } catch (error) {
      console.log(error);
    }
  }
});
