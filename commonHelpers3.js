import"./assets/styles-1042d707.js";import{S as l,i}from"./assets/vendor-8c59ed88.js";const c=r=>fetch(`https://pixabay.com/api/?key=44687559-d8ede6072036f50d72c2e92ab&q=${r}&image_type=photo&pretty=true&orientation=horizontal&safesearch=true`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}),m=(r,a)=>{const s=r.hits.map(e=>`<li class="card">
        <a href="${e.largeImageURL}"><img
          src="${e.webformatURL}"
          alt="${e.tags}"
          class="search-pic"
        />
        </a>
        <ul class="description">
          <li><a>Likes</a> <a>${e.likes}</a></li>
          <li><a>Views</a> <a>${e.views}</a></li>
          <li><a>Comments</a> <a>${e.comments}</a></li>
          <li><a>Downloads</a> <a>${e.downloads}</a></li>
        </ul>
      </li>`).join("");a.insertAdjacentHTML("beforeend",s);let t=new l(".search-list a",{captionsData:"alt",captionDelay:250});t.on("show.simplelightbox",function(e){e.preventDefault()}),t.refresh()},h=document.querySelector(".form-search"),o=document.querySelector("input[name=search]"),n=document.querySelector(".search-list");h.addEventListener("submit",r=>{r.preventDefault();let a=o.value;n.innerHTML="";const s=document.createElement("span");s.className="loader",document.body.appendChild(s),c(a).then(t=>{Object.keys(t.hits).length===0?i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(t,n),o.value="")}).catch(t=>console.log(t)).finally(()=>{s.remove()})});
//# sourceMappingURL=commonHelpers3.js.map
