import{a as y,S as g,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="50473817-3aff601f70e503f6e91238097",b="https://pixabay.com/api/";async function c(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await y.get(b,{params:r})).data}const L=new g(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function l(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:p,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a href="${e}" data-title="${t}">
          <img src="${i}" alt="${t}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${a}</p>
          <p><b>Views:</b> ${p}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",s),L.refresh()}function w(){const o=document.querySelector(".gallery");o.innerHTML=""}const f=document.querySelector(".loader");function v(){f.classList.add("is-visible")}function u(){f.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search term!",position:"topRight"});return}w(),v();const s=await c(r);u(),s.hits.length===0||l(s.hits);try{const i=await c(r);i.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):l(i.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{u()}});
//# sourceMappingURL=index.js.map
