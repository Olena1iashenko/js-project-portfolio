import{A as d,S as a,N as h,a as g,i as B}from"./assets/vendor-2d2fb6bf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const O=document.querySelector(".header-menu-nav"),I=document.querySelector(".menu-item-box");document.querySelector(".menu-item");O.addEventListener("click",P);function P(){I.classList.toggle("hidden")}const C=document.querySelector(".open-modal"),j=document.querySelector(".close-modal"),u=document.querySelector(".mobile-modal-menu"),N=document.querySelector(".mobile-menu-list");document.querySelector(".mobile-menu-item");C.addEventListener("click",T);function T(){u.classList.toggle("hidden")}j.addEventListener("click",V);function V(){u.classList.toggle("hidden")}N.addEventListener("click",F);function F(){u.classList.toggle("hidden")}const R=document.querySelector(".about-me-accordion-container");new d(R,{openOnInit:[0],showMultiple:!0,onOpen:e=>console.log("Open!",e)});new a(".about-me-swiper",{modules:[h],loop:!0,slidesOffsetAfter:10,navigation:{nextEl:".about-me-swiper-button-next"},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});console.dir(a);new a(".projects-swiper",{modules:[h],speed:500,slidesPerView:1,navigation:{prevEl:".js-btn_arrow-left",nextEl:".js-btn_arrow-right"},breakpoints:{320:{height:288},375:{height:343},768:{height:625},1440:{direction:"horizontal"}}});const A={root:null,rootMargin:"0px 0px 400px 0px",threshold:.5},m=document.querySelector(".js-covers-section"),$=m.querySelectorAll(".covers-list-item");let z=new IntersectionObserver((e,t)=>{e.forEach(o=>{o.isIntersecting&&($.forEach(c=>{c.classList.add("is-animated")}),t.unobserve(m))})},A);z.observe(m);function D(){fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Bad request, please try again");return e.json()}).then(e=>{const t=document.querySelector(".reviews-list");t.innerHTML=U(e)}).catch(e=>{console.error(e)}),new a(".reviews-swiper",{loop:!1,slidesPerView:4,spaceBetween:10,navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:4,spaceBetween:20}}})}function U(e){const t=document.querySelector(".reviews-list");return t.innerHTML="",e.map(o=>`<li class="reviews-item swiper-slide">
        <img src="${o.avatar_url}" alt="${o.author}" class="reviews-img" width="48" height="48">
        <h5 class="reviews-h">${o.author}</h5>
        <p class="reviews-p">${o.review}</p>
    </li>`).join("")}D();console.log(d);new d(".faq-list");const f="/js-project-portfolio/assets/icons-40ac62b1.svg#icon-x",w=document.querySelector(".footer-form"),r=document.querySelector(".footer-form-input"),b=document.querySelector(".footer-form-message"),i=document.querySelector(".input-email-text"),y=document.querySelector(".backdrop"),L=document.querySelector(".modal"),W=document.querySelector(".modal-btn"),S=document.querySelector(".footer-btn");function p(e){const t=r.getAttribute("pattern");return new RegExp(t).test(e)}function _(e){return e.length>=10}function v(e,t,o){B.show({iconUrl:e,titleColor:"White",titleSize:"24px",message:t,messageColor:"White",messageSize:"16px",backgroundColor:o,position:"topRight",timeout:3e3})}g.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function H(e){const t={email:e.email,comment:e.comment},o="/requests";return g.post(o,t)}function E(){r.classList.add("input-correct"),i.classList.add("correct-text"),i.textContent="Success!"}function K(){i.classList.add("incorrect-text"),i.textContent="Invalid email, try again",r.classList.add("input-incorrect")}function G(){i.classList.remove("correct-text"),r.classList.remove("input-correct")}function J(){i.classList.remove("incorrect-text"),r.classList.remove("input-incorrect")}function q(){document.body.classList.remove("backdrop-after"),y.classList.remove("backdrop-is-open"),L.classList.remove("modal-is-open")}function Q(){document.body.classList.add("backdrop-after"),y.classList.add("backdrop-is-open"),L.classList.add("modal-is-open")}function x(e){(e.target.classList.contains("backdrop")||e.target.nodeName==="svg"||e.target.nodeName==="BUTTON")&&(q(),W.removeEventListener("click",x))}function k(e){e.key==="Escape"&&(q(),document.removeEventListener("keydown",k))}function X(){p(S.form.elements.email.value.trim())||i.handleFailure()}async function Y(e){e.preventDefault();try{const t=r.value.trim(),o=b.value.trim();if(t===""||o===""){v(f,"Both fields are required. Please provide your email and comment before sending.","#e74a3b");return}if(!p(t))throw new Error("Invalid email format");if(!_(o))throw new Error("Comment must be at least 10 characters long");const c=await H({email:t,comment:o});w.reset(),E(),Q(),document.body.addEventListener("click",x),window.addEventListener("keydown",k)}catch(t){v(f,t.message,"#e74a3b")}}function M(){const e=r.value.trim();e!==""&&(p(e)?(E(),setTimeout(G,2e3)):(K(),setTimeout(J,2e3)))}w.addEventListener("submit",Y);S.addEventListener("submit",X);r.addEventListener("input",M);b.addEventListener("input",M);
//# sourceMappingURL=commonHelpers.js.map
