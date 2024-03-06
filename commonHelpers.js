import{r as S,d as m,l as P,u as h,a as $,b as w,c as a,e as M}from"./assets/updateonlogin-76bb9501.js";import{g as T,c as C,d as I,a as _,o as q}from"./assets/vendor-76c4d237.js";const E="/BookShelf/assets/symbol-defs-667647db.svg",c=document.querySelector(".cart-list"),H=document.querySelector(".cart-empty-container"),r=document.querySelector(".pagination-list"),z=document.querySelector(".cart-buttons-container");S(".shoppinglist-title","Favorite Books");function d(t){c.innerHTML="";const o=t.map(e=>`<li class="cart-item">
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
              <use href="${E}#icon-delete-shoppinglist"></use>
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
                  src="${$}"
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

                  src="${w}"
                  alt="shopping cart empty"
                  height="16"
                  width="16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o)}let n={books:[],currentPage:0,nextPage:0,prevPage:0,totalBooks:0,totalPages:0,booksPerPage:0,buttonsPerPage:0,totalButtonsGroups:0,pagesOnLastGroup:0};async function l(t,o){r.removeEventListener("click",f),c.removeEventListener("click",v);const e=t.currentUser,i=[];if(e)await T(C(m,e.uid)).then(s=>{s.forEach(u=>{i.push(u.data())}),g(o,i)});else{const s=P.getAllBooks();g(o,s)}}function g(t,o){if(c.innerHTML="",r.innerHTML="",t.totalBooks=o.length,t.booksPerPage=O(),t.totalPages=j(t.totalBooks,t.booksPerPage),t.books=R(o,t.booksPerPage,t.totalPages),t.buttonsPerPage=F(),t.totalButtonsGroups=Math.ceil(t.totalPages/t.buttonsPerPage),t.pagesOnLastGroup=t.totalPages%t.totalButtonsGroups,t.totalBooks>0){if(t.totalPages===1&&d(t.books[0]),t.totalPages>1){d(t.books[t.currentPage]),A(t,r),b(t.currentPage);const e=document.querySelector(".active");p(e),r.addEventListener("click",f)}c.addEventListener("click",v)}else H.classList.remove("is-hidden")}function A(t,o){if(o.innerHTML="",t.totalPages>1)for(let e=0;e<t.totalPages;e++)o.insertAdjacentHTML("beforeend",`<li><button data-page="${e}">${e+1}</button></li>`)}function f(t){const o=t.target.closest("button");if(o){const e=o.dataset.page;e&&(d(n.books[e]),b(e),n.currentPage=e,p(o))}}function p(t){const o=t.getBoundingClientRect(),e=z.getBoundingClientRect(),i=r.getBoundingClientRect(),s=e.width/2,u=o.width/2,B=o.left,L=i.left,y=parseInt(s)-parseInt(B)-parseInt(u)+parseInt(L);r.style.translate=`${y}px 0`}function v(t){if(t.target.closest(".cart-item-del-button")!==null){const o=t.target.closest(".cart-item-del-button").dataset.id;G(a,o)}}async function G(t,o){const e=t.currentUser;e?await I(_(m,e.uid,o)).then(()=>{parseInt(n.currentPage)===parseInt(n.totalPages)-1&&n.books[n.currentPage].length===1&&n.currentPage>=1&&(n.currentPage-=1),l(t,n)}):(P.removeBookFromFavorites(o),h(),parseInt(n.currentPage)===parseInt(n.totalPages)-1&&n.books[n.currentPage].length===1&&n.currentPage>=1&&(n.currentPage-=1),l(t,n))}function k(){return window.innerWidth<767}function O(){return k()?4:3}function F(){return k()?2:3}function j(t,o){return Math.ceil(t/o)}function b(t){const o=document.querySelector(".active");o==null||o.classList.remove("active"),document.querySelector(`[data-page="${t}"]`).classList.add("active")}function R(t,o,e){let i=[];for(let s=0;s<e;s++)i[s]=t.splice(0,o);return i}q(a,t=>{M(),l(t?a:a,n)});h();
//# sourceMappingURL=commonHelpers.js.map
