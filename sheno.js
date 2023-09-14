import { products } from "/products.js";
import { cart , addToCart} from "/cart.js";







const showDisplayContainer= document.querySelector(".container-items")
const cartCounts= document.querySelector(".js-cart-count")
const openChartBtn= document.querySelector(".js-open-chart")
const pageChart = document.querySelector(".pageChart")
const brandName= document.querySelector(".brand-name")








  // <img src="images/ratings/rating-${item.rating.stars*10}.png" alt="">  waa ratings items refference space next h4
let productHTMLL='';

  products.forEach((item)=>{
    productHTMLL+=`     <div class="item-1">
                <img src=${item.image} alt="">
                <h4>${item.name}</h4>
  
                <small>$${(item.priceCents)/100}</small>
                <button class="js-btn-cart" class="buttonCart" data-product-name="${item.name}">Add cart</button>
            </div>`


    

})



showDisplayContainer.innerHTML+=productHTMLL


  // BUTTONS CARTS FUNCTION

  const btnCarts= document.querySelectorAll(".js-btn-cart")

btnCarts.forEach((btnCart)=>{
  btnCart.addEventListener("click", ()=>{

    const productName= btnCart.dataset.productName;
    console.log(productName)
    
    addToCart(productName)
   


      let  Quantatiy=0;

    cart.forEach((item)=>{
      Quantatiy +=item.Quantatiy
    })

    console.log(cart)
    cartCounts.innerHTML= Quantatiy

// cartFun()
  })

})



































// let storeCart;

//   cart.forEach((item)=>{
//     if (productName === item.name){
//       storeCart=item;
//     }
//   })
  




//   if(storeCart){
//     storeCart.quantatiy+=1
//   }else{
//     cart.push({
//       name:btnCart.dataset.productName,
//       quantatiy:1
//     })

//   }

// let cartCount=0;
// cart.forEach((item)=>{
// cartCount+=item.quantatiy
// })
// cartCounts.innerHTML=cartCount