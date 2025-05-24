import{a as g,S as y,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="50473817-3aff601f70e503f6e91238097",b="https://pixabay.com/api/";async function c(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await g.get(b,{params:r})).data}const L=new y(".gallery a");function l(o){const r=document.querySelector(".gallery"),i=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:d,comments:m,downloads:p})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${s}" alt="${t}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${a}</p>
          <p><b>Views:</b> ${d}</p>
          <p><b>Comments:</b> ${m}</p>
          <p><b>Downloads:</b> ${p}</p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",i),L.refresh()}function w(){const o=document.querySelector(".gallery");o.innerHTML=""}const f=document.querySelector(".loader");function v(){f.classList.add("is-visible")}function u(){f.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search term!",position:"topRight"});return}w(),v();const i=await c(r);u(),i.hits.length===0||l(i.hits);try{const s=await c(r);s.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):l(s.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{u()}});
//# sourceMappingURL=index.js.map
