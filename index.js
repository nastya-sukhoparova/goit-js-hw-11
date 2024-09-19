(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();async function f(e,r){const s=await fetch(`https://pixabay.com/api/?key=46065959-261c5874db82aaa09dfa5c313&q=${e}&page=${r}&image_type=photo&orientation=horizontal&safesearch=true`);if(!s.ok)throw new Error("Network response was not ok");return s.json()}const a=document.querySelector(".gallery");function d(e){const r=e.map(n=>`
    <li class="gallery-item">
      <a href="${n.largeImageURL}" class="gallery-link">
        <img src="${n.webformatURL}" alt="${n.tags}" class="gallery-image" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${n.likes}</p>
        <p class="info-item"><b>Views:</b> ${n.views}</p>
        <p class="info-item"><b>Comments:</b> ${n.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${n.downloads}</p>
      </div>
    </li>
  `).join("");a.insertAdjacentHTML("beforeend",r)}function m(){a.innerHTML=""}function c(e){iziToast.error({title:"Error",message:e})}function y(e){iziToast.success({title:"Success",message:e})}function p(){const e=document.querySelector(".loader");e.style.display="block"}function h(){const e=document.querySelector(".loader");e.style.display="none"}const l=document.querySelector("#search-form"),g=l.querySelector('input[name="searchQuery"]');document.querySelector(".gallery");let u=1;l.addEventListener("submit",b);function b(e){e.preventDefault();const r=g.value.trim();if(r===""){c("Please enter a search query");return}m(),u=1,w(r)}function w(e){p(),f(e,u).then(r=>{if(r.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}d(r.hits),y(`Found ${r.totalHits} images`)}).catch(r=>{c("Something went wrong. Please try again later.")}).finally(()=>{h()})}
//# sourceMappingURL=index.js.map
