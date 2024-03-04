import{r as B,l as d,u as g,a as L,b as y,c as S,d as $}from"./assets/updateonlogin-6dd16d39.js";import{o as w}from"./assets/vendor-929ff552.js";const M="/BookShelf/assets/symbol-defs-667647db.svg",r=document.querySelector(".cart-list"),T=document.querySelector(".cart-empty-container"),s=document.querySelector(".pagination-list"),C=document.querySelector(".cart-buttons-container");B(".shoppinglist-title","Favorite Books");function a(t){r.innerHTML="";const o=t.map(e=>`<li class="cart-item">
      <img
        class="cart-item-img"
        src="${e.book_image}"
        alt="book image"
        width="100"
        height="142"
      />
      <div class="cart-item-content">
        <div class="cart-item-content-top">
          <div class="cart-item-content-top-left">
            <h3 class="cart-item-title">${e.title}</h3>
            <p class="cart-item-category">${e.list_name}</p>
          </div>
          <button data-id="${e._id}" class="cart-item-del-button">
            <svg class="cart-item-del-button-icon" width="14" height="14">
              <use href="${M}#icon-delete-shoppinglist"></use>
            </svg>
          </button>
        </div>
        <div class="cart-item-content-middle">
          <p class="cart-item-content-desc">
            ${e.description}
          </p>
          <div class="cart-item-content-bottom">
            <p class="cart-item-author">${e.author}</p>
            <div class="cart-items-links">
              <a
                class="cart-items-link"
                target="_blank"
                href="${e.amazon_buy_link}"
              >
                <img
                  class="cart-items-amazon"
                  src="${L}"
                  alt="shopping cart empty"
                  height="11"
                  width="32"
                />
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${e.apple_buy_link}"
              >
                <img
                  class="cart-items-apple"

                  src="${y}"
                  alt="shopping cart empty"
                  height="16"
                  width="16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");r.insertAdjacentHTML("beforeend",o)}let n={books:[],currentPage:0,nextPage:0,prevPage:0,totalBooks:0,totalPages:0,booksPerPage:0,buttonsPerPage:0,totalButtonsGroups:0,pagesOnLastGroup:0};function m(t){s.removeEventListener("click",l),r.removeEventListener("click",u);const o=d.getAllBooks();if(r.innerHTML="",s.innerHTML="",t.totalBooks=o.length,t.booksPerPage=I(),t.totalPages=H(t.totalBooks,t.booksPerPage),t.books=z(o,t.booksPerPage,t.totalPages),t.buttonsPerPage=q(),t.totalButtonsGroups=Math.ceil(t.totalPages/t.buttonsPerPage),t.pagesOnLastGroup=t.totalPages%t.totalButtonsGroups,t.totalBooks>0){if(t.totalPages===1&&a(t.books[0]),t.totalPages>1){a(t.books[t.currentPage]),_(t,s),f(t.currentPage);const e=document.querySelector(".active");P(e),s.addEventListener("click",l)}r.addEventListener("click",u)}else T.classList.remove("is-hidden")}function _(t,o){if(o.innerHTML="",t.totalPages>1)for(let e=0;e<t.totalPages;e++)o.insertAdjacentHTML("beforeend",`<li><button data-page="${e}">${e+1}</button></li>`)}function l(t){const o=t.target.closest("button");if(o){const e=o.dataset.page;e&&(a(n.books[e]),f(e),n.currentPage=e,P(o))}}function P(t){const o=t.getBoundingClientRect(),e=C.getBoundingClientRect(),c=s.getBoundingClientRect(),i=e.width/2,p=o.width/2,v=o.left,b=c.left,k=parseInt(i)-parseInt(v)-parseInt(p)+parseInt(b);s.style.translate=`${k}px 0`}function u(t){if(t.target.closest(".cart-item-del-button")!==null){const o=t.target.closest(".cart-item-del-button").dataset.id;d.removeBookFromFavorites(o),g(),parseInt(n.currentPage)===parseInt(n.totalPages)-1&&n.books[n.currentPage].length===1&&n.currentPage>=1&&(n.currentPage-=1),m(n)}}function h(){return window.innerWidth<767}function I(){return h()?4:3}function q(){return h()?2:3}function H(t,o){return Math.ceil(t/o)}function f(t){const o=document.querySelector(".active");o==null||o.classList.remove("active"),document.querySelector(`[data-page="${t}"]`).classList.add("active")}function z(t,o,e){let c=[];for(let i=0;i<e;i++)c[i]=t.splice(0,o);return c}m(n);w($,t=>{S(),t||console.log("you have to log in")});g();
//# sourceMappingURL=commonHelpers.js.map
