import { cart, addToCart,removeItem } from "/cart.js";
import { products } from "/products.js";

const html= document.querySelector(".item-details")







let cartHtml="";

cart.forEach((item)=>{
    const cartName= item.name

    // console.log(cartName)


    let  matchItemProduct;


    products.forEach((product)=>{
        if(cartName === product.name){
            matchItemProduct= product
        }
    })



    cartHtml+=    `
    <div class="detail js-container">
    <img src="${matchItemProduct.image}" alt="">
    <div class="name-price">
        <h3 class="nameItem">"${matchItemProduct.name}"</h3>
        <small class="price">
            $10.9
        </small>
        <button class="js-btn-delete" data-product-name="${matchItemProduct.name}">Delete</button>
    </div>
</div>
    `
//    console.log(matchItemProduct) 
})
html.innerHTML= cartHtml


// console.log(cartHtml)




document.querySelectorAll(".js-btn-delete")
.forEach((btn)=>{
        btn.addEventListener("click",()=>{
        const dataName= btn.dataset.productName
            // console.log(dataName)
            removeItem(dataName)
            console.log(cart)

            // const container = document.querySelector('.js-container');

            // console.log(container)


})
})