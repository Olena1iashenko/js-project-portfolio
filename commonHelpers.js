import{A as d,S as a,N as f,a as b,i as h}from"./assets/vendor-2d2fb6bf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const y=document.querySelector(".about-me-accordion-container");new d(y,{openOnInit:[0],showMultiple:!0,onOpen:e=>console.log("Open!",e)});new a(".about-me-swiper",{modules:[f],loop:!0,slidesOffsetAfter:10,navigation:{nextEl:".about-me-swiper-button-next"},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});console.dir(a);new a(".projects-swiper",{modules:[f],speed:500,navigation:{prevEl:".js-btn_arrow-left",nextEl:".js-btn_arrow-right"}});const L={root:null,rootMargin:"0px 0px 400px 0px",threshold:.5},u=document.querySelector(".js-covers-section"),x=u.querySelectorAll(".covers-list-item");let E=new IntersectionObserver((e,t)=>{e.forEach(s=>{s.isIntersecting&&(x.forEach(c=>{c.classList.add("is-animated")}),t.unobserve(u))})},L);E.observe(u);function S(){fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Bad request, please try again");return e.json()}).then(e=>{const t=document.querySelector(".reviews-list");t.innerHTML=q(e)}).catch(e=>{console.error(e)}),new a(".reviews-swiper",{loop:!1,slidesPerView:4,spaceBetween:10,navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:4,spaceBetween:20}}})}function q(e){const t=document.querySelector(".reviews-list");return t.innerHTML="",e.map(s=>`<li class="reviews-item swiper-slide">
        <img src="${s.avatar_url}" alt="${s.author}" class="reviews-img" width="48" height="48">
        <h5 class="reviews-h">${s.author}</h5>
        <p class="reviews-p">${s.review}</p>
    </li>`).join("")}S();console.log(d);new d(".faq-list");const k="/js-project-portfolio/assets/icons-1c5fc102.svg#icon-x",O=document.querySelector(".footer-form"),n=document.querySelector(".footer-form-input"),B=document.querySelector(".footer-form-message"),i=document.querySelector(".input-email-text"),m=document.querySelector(".backdrop"),p=document.querySelector(".modal"),v=document.querySelector(".modal-btn");function P(e,t){return{email:e,comment:t,id:Date.now()}}function w(e){(e.target.classList.contains("backdrop")||e.target.nodeName==="svg"||e.target.nodeName==="BUTTON")&&(document.body.classList.remove("backdrop-after"),m.classList.remove("backdrop-is-open"),p.classList.remove("modal-is-open"),v.removeEventListener("click",w))}function g(e){console.log(e.key),e.key==="Escape"&&(scrollUpBtn.classList.add("visible"),document.body.classList.remove("backdrop-after"),m.classList.remove("backdrop-is-open"),p.classList.remove("modal-is-open"),document.removeEventListener("keydown",g))}function I(e,t,s){h.show({iconUrl:e,titleColor:"White",titleSize:"24px",message:t,messageColor:"White",messageSize:"16px",backgroundColor:s,position:"topRight",timeout:3e3})}async function j(e){try{e.preventDefault(),document.body.classList.add("loading");const t=n.value,s=B.value;if(s.length<10)throw new Error("Comment must be at least 10 characters long");await b.post("/requests",P(t,s)),e.target.reset(),document.body.classList.add("backdrop-after"),m.classList.add("backdrop-is-open"),p.classList.add("modal-is-open"),v.addEventListener("click",w),window.addEventListener("keydown",g)}catch(t){I(k,t.message,"#e74a3b")}finally{document.body.classList.remove("loading")}}function C(e){const t=n.getAttribute("pattern");return new RegExp(t).test(e)}function M(){const e=n.value;e!==""&&(C(e)?(i.classList.add("correct-text"),n.classList.add("input-correct"),i.textContent="Success!",setTimeout(()=>{i.classList.remove("correct-text"),n.classList.remove("input-correct")},2e3)):(i.classList.add("incorrect-text"),i.textContent="Invalid email, try again",n.classList.add("input-incorrect"),setTimeout(()=>{i.classList.remove("incorrect-text"),n.classList.remove("input-incorrect")},2e3)))}function N(e,t){e.value.length>t&&(e.value=e.value.substring(0,t-3)+"...")}O.addEventListener("submit",j);n.addEventListener("blur",M);n.addEventListener("input",function(){N(n,50)});
//# sourceMappingURL=commonHelpers.js.map
