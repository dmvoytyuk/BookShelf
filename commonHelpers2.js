import{f as u,a as P,b as U,c as g,d as v,l as _,u as S,s as m,r as h,h as l,g as T,i as C,e as w}from"./assets/updateonlogin-8656d501.js";import{g as z,c as D,s as O,a as M,d as F,o as Y}from"./assets/vendor-76c4d237.js";const y=document.querySelector(".backdrop"),E=document.querySelector(".modal-wrapper"),q=document.querySelector("body"),a=document.querySelector(".modal-btn-addremove"),i=document.querySelector(".congrats"),L=document.querySelector(".modal-close"),n={_id:"",title:"",author:"",list_name:"",book_image:"",description:"",amazon_buy_link:"",apple_buy_link:""};async function G(e){try{E.innerHTML="",i.innerHTML="";const t=await u.getBookDescription(e);n._id=t._id,n.title=t.title,n.author=t.author,n.list_name=t.list_name,n.book_image=t.book_image,n.description=t.description,n.amazon_buy_link=t.buy_links[0].url,n.apple_buy_link=t.buy_links[1].url;const o=V(t);E.insertAdjacentHTML("beforeend",o),b(a,e),L.blur(),a.addEventListener("click",x),L.addEventListener("click",k),document.addEventListener("keydown",$),y.addEventListener("click",j)}catch(t){console.log("Error fetching modal:",t)}}function H(e){y.classList.add("modal-open"),q.classList.add("no-scroll"),G(e)}function V(e){return`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
        
      <div class="modal-book-container-right">
        <div class="modal-book-container">
          <div class="modal-book-info">
            <h3 class="modal-description-title">${e.title}</h3>
            <p class="modal-description-author">${e.author}</p>
          </div>
          <p class="modal-book-description">${e.description}</p>
          <ul class="modal-icons-list">
          <li>
            <a class="modal-book-link" href="${e.buy_links[0].url}" target="_blank"><img class='modal-link-icon-amazon' src="${P}" alt="" width='62' height='19' 
            /></a>
          </li>
          <li>
            <a class="modal-book-link" href="${e.buy_links[1].url}" target="_blank"><img class='modal-link-icon-apple' src="${U}" alt="" width='33' height='32'
            /></a>
          </li>
          </ul>
        </div>
      </div>`}async function b(e,t){if(g.currentUser){let o=!1;await z(D(v,g.currentUser.uid)).then(s=>{s.forEach(r=>{r.id===t&&(o=!0)}),o?e.textContent="remove from favorite list":e.textContent="add to favorite list",e.blur()})}else _.isBookExsist(t)?(e.textContent="remove from favorite list",i.classList.add("modal-text-congratulations")):(e.textContent="add to favorite list",i.classList.remove("modal-text-congratulations")),e.blur()}function x(e){a.textContent==="add to favorite list"?W(n):J(n)}function $(e){e.key==="Escape"&&k()}function j(e){e.target===y&&k()}function k(){y.classList.remove("modal-open"),q.classList.remove("no-scroll"),a.textContent="",L.removeEventListener("click",k),a.removeEventListener("click",x),document.removeEventListener("keydown",$),y.removeEventListener("click",j)}async function W(e){const t=g.currentUser;t?await O(M(v,t.uid,e._id),{_id:e._id,title:e.title,author:e.author,list_name:e.list_name,book_image:e.book_image,description:e.description,amazon_buy_link:e.amazon_buy_link,apple_buy_link:e.apple_buy_link}).then(()=>{i.textContent='Сongratulations! You have added the book to favorite books list. To delete, press the button "Remove from the shopping list".',b(a,e._id)}):(_.addBookToFavorites(e),S(),i.textContent='Сongratulations! You have added the book to books list list. To delete, press the button "Remove from the shopping list".')}async function J(e){const t=g.currentUser;t?await F(M(v,t.uid,e._id)).then(()=>{i.textContent="",b(a,e._id)}):(_.removeBookFromFavorites(e),S(),i.textContent="",b(a,e._id))}function I(e,t){if(m(),e.length===0)try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",h(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const s=document.querySelector(".book-category-list"),r='<p class = "category-text-empty">Sorry, no books were found for the given category</p>';s.innerHTML=r}catch{console.log("Error fetching modal:",error)}finally{l()}else try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",h(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const s=document.querySelector(".book-category-list"),r=e.map(({author:d,book_image:c,title:f,_id:p})=>T({author:d,book_image:c,title:f,_id:p})).join("");s.innerHTML=r,s.addEventListener("click",K)}catch{console.log("Error fetching modal:",error)}finally{l()}}async function K(e){if(e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;H(t)}}async function Q(){try{const e=document.querySelector(".bestsellers-container");e.innerHTML="",m();const t=await u.getBestSellers();N(t)}catch(e){console.error("Error fetching best sellers:",e)}}function N(e){const t=document.querySelector(".bestsellers-container");l(),t.innerHTML="",h(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const o=document.querySelector(".bestsellers-list"),s=e.map(({books:r,list_name:d})=>`<li class="bestsellers-item">
      <h2 class="bestsellers-category-title">${d}</h2>
      <ul class="bestsellers-books-list">${r.map(({title:c,author:f,book_image:p,_id:A})=>r.length===0?'<p class="category-empty">Sorry, no books were found for the given category!</p>':T({title:c,author:f,book_image:p,_id:A})).join(`
`)}
        </ul>
        <button class="bestsellers-btn" type="button" data-category="${d}">See more</button>
      </li>`).join(`
`);o.insertAdjacentHTML("beforeend",s),o.addEventListener("click",Z),o.addEventListener("click",X)}async function X(e){if(e.preventDefault(),e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;H(t)}}async function Z(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const o=document.querySelector(".sidebar-category-item"),s=document.querySelectorAll(".sidebar-category-item"),r=document.querySelector(".bestsellers-container");r.innerHTML="",m();const d=await u.getSelectedCategory(t);I(d,t),l(),s.forEach(c=>{c.dataset.source===t&&(o.classList.remove("category-active"),c.classList.add("category-active"),c.scrollIntoView({behavior:"instant",block:"center",inline:"nearest"}))}),C()}catch(t){console.log("Error fetching modal:",t)}}const B={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function R(e){return e.sort((o,s)=>o.list_name.localeCompare(s.list_name)),e.map(o=>`<li class='sidebar-category-item' data-source="${o.list_name}">${o.list_name}</li>`).join("")}(async()=>{try{const e=document.querySelector(".bestsellers-container");e.innerHTML="",m();const t=await u.getCategoryList(),o=R(t);B.categoryList.insertAdjacentHTML("beforeend",o),l()}catch(e){console.log(e)}})();B.allCategory.addEventListener("click",async e=>{try{const t=document.querySelector(".bestsellers-container");t.innerHTML="",m();const o=await u.getBestSellers();N(o),l(),C()}catch(t){console.log(t)}});B.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(r=>{r.classList.remove("category-active")}),e.target.classList.add("category-active"),window.scrollTo({top:0,behavior:"smooth"});const s=document.querySelector(".bestsellers-container");s.innerHTML="",m();try{if(!e.target.classList.contains("all-category")){const r=await u.getSelectedCategory(t);I(r,t),l(),C()}}catch(r){console.log(r)}}});Y(g,e=>{e?w():w()});Q();S();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-up");window.addEventListener("scroll",function(){window.scrollY>600?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers2.js.map
