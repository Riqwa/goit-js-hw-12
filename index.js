import{S as p,a as d,i as n}from"./assets/vendor-B3Lscd_h.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(o){const r=document.querySelector(".gallery"),i=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:l,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${e}" data-title="${t}">
          <img src="${a}" alt="${t}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${s}</p>
          <p><b>Views:</b> ${l}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",i),m.refresh()}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}const c=document.querySelector(".loader");function h(){c.classList.add("is-visible")}function b(){c.classList.remove("is-visible")}const L="50473817-3aff601f70e503f6e91238097",v="https://pixabay.com/api/";async function w(o){const r={key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(v,{params:r})).data}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search term!",position:"topRight"});return}g(),h();try{const i=await w(r);i.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(i.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
