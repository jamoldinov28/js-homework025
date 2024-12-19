

const sidebarEl = document.querySelector(".sidebar")

function showSidebar(){
    sidebarEl.classList.toggle("show")
}
// searchInputEl.addEventListener("keyup", async (e)=>{
//     const value = e.target.value.trim()
//     if(value){
//         searchDropEl.style.display = "block"
//         const response = await fetch(`${BASE_URL}/products/search?q=${value}&limit=5`)
//         response
//             .json()
//             .then(res => {
//                 searchDropEl.innerHTML = null
//                 res.products.forEach((item)=>{
//                     const divEl = document.createElement("div")
//                     divEl.className = "search__item"
//                     divEl.dataset.id = item.id
//                     divEl.innerHTML = `
//                     <img src=${item.thumbnail} alt="">
//                     <div>
//                          <p>${item.title}</p>
//                     </div>
//                     `
//                     searchDropEl.appendChild(divEl)
//                 })
//             })
//             .catch(err => console.log(err))
//     }else{
//         searchDropEl.style.display = "none"
//     }
// })

// searchDropEl.addEventListener("click", e => {
//     if(e.target.closest(".search__item")?.className === "search__item"){
//         const id = e.target.closest(".search__item").dataset.id
//         open(`/pages/product.html?id=${id}`, "_self")
//         searchInputEl.value = ""
//     }
// })