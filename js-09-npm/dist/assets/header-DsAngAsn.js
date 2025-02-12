(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();const o=[{name:"Principal",url:"/index.html",active:!1,visible:!0,icon:'<i class="bi bi-house-heart-fill"></i>'},{name:"Productos",url:"/src/pages/products/products.html",active:!1,visible:!0,icon:'<i class="bi bi-bag-heart-fill"></i>'},{name:"Acerca de nostros",url:"/src/pages/about-us/about-us.html",active:!1,visible:!1,icon:'<i class="bi bi-postcard-heart-fill"></i>'},{name:"Contáctanos",url:"/src/pages/contact/contact.html",active:!1,visible:!0,icon:'<i class="bi bi-postcard-heart-fill"></i>'},{name:"Regístrate",url:"/src/pages/register/register.html",active:!1,visible:!0,icon:'<i class="bi bi-envelope-paper-heart-fill"></i>'},{name:"Login",url:"/src/pages/login/login.html",active:!1,visible:!1,icon:'<i class="bi bi-person-heart"></i>'},{name:"Admin",url:"/src/pages/admin/admin.html",active:!1,visible:!1,icon:'<i class="bi bi-clipboard-heart-fill"></i>'}],n=i=>i.split("/").pop(),c=()=>{const i=window.location.pathname;let t;return i==="/"?t="index.html":t=n(i),t},u=(i,t)=>i.map(s=>`
        <li
          class="nav-item"          
          style="display: ${s.visible?"list-item":"none"}"
        > 
          <a 
            class="nav-link ${n(s.url)===t?"active":""}" 
            href="${s.url}"
            > 
            ${s.icon} ${s.name} 
            </a>            
        </li>
    `).join(""),d=()=>{const i=c();return`   
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand" href="/index.html">JavaScript Course</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${u(o,i)}
                </div>
            </div>
        </nav>     
 `},b=()=>d();export{b as i};
