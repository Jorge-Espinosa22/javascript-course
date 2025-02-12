var n=s=>{throw TypeError(s)};var c=(s,i,t)=>i.has(s)||n("Cannot "+t);var o=(s,i,t)=>(c(s,i,"read from private field"),t?t.call(s):i.get(s)),d=(s,i,t)=>i.has(s)?n("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(s):i.set(s,t),a=(s,i,t,r)=>(c(s,i,"write to private field"),r?r.call(s,t):i.set(s,t),t);import{i as p}from"./bootstrap.esm-DhjEgBJg.js";import{i as u}from"./footer-CCTUu1Yo.js";var e;class v{constructor(i,t){d(this,e);this.imageName=i,a(this,e,t)}getImageUrl(){return`${this.imageName}`}get description(){return`${o(this,e)}`}set description(i){a(this,e,i)}}e=new WeakMap;class ${constructor(i,t,r,g,l,h,m){this.id=i,this.title=t,this.description=r,this.price=g,this.category=l,this.image=new v(h,t),this.rating=m}generateHTML(){return`
            <div class="col-12 col-md-6 col-lg-4 p-2">
                <div class="card h-100" > 
                    <figure class="p-1" >                   
                        <img src="${this.image.getImageUrl()}" class="card-img-top product-img" alt="${this.image.description}">
                    <figure> 
                    <div class="card-body">
                        <div class="card-title-container">
                            <h5 title="${this.title}" class="card-title">
                            ${this.title.length>50?this.title.substring(0,47)+"...":this.title}
                            </h5>
                        </div>
                        <div class="card-description-container my-2">
                            <p title="${this.description}" class="card-text">
                            ${this.description.length>70?this.description.substring(0,67)+"...":this.description}
                            </p>                            
                        </div>
                        <p class="card-text"><strong>Price: $${this.price}</strong></p>
                        <p class="card-text"><em>Rating: ${this.rating.rate} (${this.rating.count} reviews)</em></p>                        
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        `}}const w=s=>s.map(t=>new $(t.id,t.title,t.description,t.price,t.category,t.image,t.rating).generateHTML()).join(""),y=async s=>{try{const t=await(await fetch(s)).json();return w(t)}catch(i){console.error(i)}};window.addEventListener("load",async()=>document.getElementById("app").innerHTML=`
    ${p()} 
    <main class="container text-center my-4">
      <div class="row">
        ${await y("/json/gaming-products.json")}
      </div>
    </main>
    ${u()}
`);
