const topiccWrapperEl = document.querySelector(".topicc__wrapper")
let TODOS = JSON.parse(localStorage.getItem("todos")) || [
    {
        id: 1,
        offer: `All hand-made with natural soy wax, Candleaf <br> is`,
        car: `🚚 FREE SHIPPING`,
        title: "Spiced Mint Candleaf®",
        narx: `$9.99`,
        miqdor: `Quantity`,
        Quantity: `+ 1 -`,
        purchase: `One time purchase`,
        dastafka: `Subscribe and delivery every`,
        action: `Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details`,
        advice: `Wax: Top grade Soy wax that delivers a smoke less,     consistent burn <br> Fragrance: Premium quality ingredients natural essential oils <br>
        Burning Time: 70-75 hours Dimension: 10cm xWeight: 400g `
    }
]
console.log(TODOS)

function createTodo(todos){
    todos.forEach((todo)=>{
        const boxEl = document.createElement("div");
        boxEl.innerHTML = `
            <div class="topicc__wrapper">
                <div class="topicc__image">
                    <img src="../assets/image2.png" alt="">
                    <h2>${todo.offer} </h2>
                    <h5>${todo.car}</h5>
                </div>
                <div class="topicc__title">
                    <div class="topicc__text">
                      <h1>${todo.title}</h1>  
                    <h5>${todo.narx}</h5>
                    <h4>${todo.miqdor}</h4>
                    <h6>${todo.Quantity}</h6>
                  </div>

                  <div class="topicc__textt">
                    <h4>${todo.purchase}</h4>
                    <div>
                        <div class="topicc__lg">
                            <h4>${todo.dastafka}</h4>
                            <p>${todo.action}</p>
                        </div>
                        <button class="topicc__btn"> <i class="fa-solid fa-cart-shopping"></i> + Add to cart</button>
                    </div>
                  </div>
                </div>
             </div>

                <div class="topicc__box">
                    <p>${todo.advice}</p>
                </div>
        `
        topiccWrapperEl.appendChild(boxEl)
    })
}
window.addEventListener("load", ()=>{
    createTodo(TODOS)
})
const sidebarEl = document.querySelector(".sidebar")
function showSidebar(){
    sidebarEl.classList.toggle("show")
}