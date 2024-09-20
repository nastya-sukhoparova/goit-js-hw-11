import{S as d}from"./assets/vendor-CgTBfC_f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function m(e,r){const n=await fetch(`https://pixabay.com/api/?key=46065959-261c5874db82aaa09dfa5c313&q=${e}&page=${r}&image_type=photo&orientation=horizontal&safesearch=true`);if(!n.ok)throw new Error("Network response was not ok");return n.json()}const l=document.querySelector(".gallery");function y(e){const r=e.map(s=>`
    <li class="gallery-item">
      <a href="${s.largeImageURL}" class="gallery-link">
        <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${s.likes}</p>
        <p class="info-item"><b>Views:</b> ${s.views}</p>
        <p class="info-item"><b>Comments:</b> ${s.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${s.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r)}function p(){l.innerHTML=""}function c(e){iziToast.error({title:"Error",message:e})}function h(e){iziToast.success({title:"Success",message:e})}function g(){const e=document.querySelector(".loader");e.style.display="block"}function b(){const e=document.querySelector(".loader");e.style.display="none"}const u=document.querySelector("#search-form"),w=u.querySelector('input[name="searchQuery"]');document.querySelector(".gallery");let f=1,a;u.addEventListener("submit",L);function L(e){e.preventDefault();const r=w.value.trim();if(r===""){c("Please enter a search query");return}p(),f=1,S(r)}function S(e){g(),m(e,f).then(r=>{if(r.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}y(r.hits),a?a.refresh():a=new d(".gallery a"),h(`Found ${r.totalHits} images`)}).catch(r=>{c("Something went wrong. Please try again later.")}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
