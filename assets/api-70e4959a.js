import{a as c}from"./vendor-8dea2054.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function v(e,t){const s=document.querySelector(e),n=t.split(" "),o=n[n.length-1];n.pop(),t=n.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function S({title:e,author:t,book_image:s,_id:n}){return`<li class="book-category-item" data-id="${n}">
    <div class = "img-cover">
      <img class="book-category-image" src="${s}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}const L={key:"books",books:[],getAllBooks:function(){return localStorage.getItem(this.key)===null?[]:JSON.parse(localStorage.getItem(this.key))},isBookExsist:function(e){return localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.books.findIndex(s=>s._id===e)!==-1},addBookToFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.isBookExsist(e._id)?console.log("Oops, this book already in shopping list"):(this.books.push(e),localStorage.setItem(this.key,JSON.stringify(this.books)))},removeBookFromFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key));const t=this.books.findIndex(s=>s._id===e);this.books.splice(t,1),localStorage.setItem(this.key,JSON.stringify(this.books))}},d=document.querySelector(".theme-switch-input"),a=document.querySelector("body");function g(){d.checked===!1?(a.classList.add("light-theme"),a.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(a.classList.remove("light-theme"),a.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const p=localStorage.getItem("theme");p==="dark"?(d.checked=!0,g()):d.checked=!1;d.addEventListener("change",g);const l=document.querySelector(".menu-open-btn"),m=document.querySelector(".menu-close-btn"),f=document.querySelector(".mob-menu");l.addEventListener("click",()=>{f.classList.add("is-open"),l.classList.remove("is-open"),l.classList.add("hidden"),m.classList.remove("hidden")});m.addEventListener("click",()=>{f.classList.remove("is-open"),l.classList.remove("hidden"),m.classList.add("hidden")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".header-menu-home"),t=document.querySelector(".header-menu-shopping");t.addEventListener("click",s);function s(){t.classList.contains("btn-active")||(e.classList.remove("btn-active"),t.classList.add("btn-active"))}e.addEventListener("click",n);function n(){e.classList.contains("btn-active")||(t.classList.remove("btn-active"),e.classList.add("btn-active"))}});const y=document.querySelector(".slider-line"),b=document.querySelector(".slider-button-scroll"),h=document.querySelector(".slider-button-arrow");let i=0;b.addEventListener("click",async()=>{i+=150,i>170&&(i=0),y.style.bottom=i+"px",i===150?h.setAttribute("href","./img/symbol-defs.svg#icon-Vector-up1-1"):h.setAttribute("href","./img/symbol-defs.svg#icon-Vector-down1-1")});c.defaults.baseURL="https://books-backend.p.goit.global/books";const I={getCategoryList:async function(){try{return(await c.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await c.get("/top-books")).data}catch(e){console.log(e)}},getSelectedCategory:async function(e){try{return(await c.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await c.get(`/${e}`)).data}catch(t){console.log(t)}}};export{S as a,I as b,L as l,v as r};
//# sourceMappingURL=api-70e4959a.js.map
