export let cart=[
        {
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        Quantatiy:1
      
      },
      {
        name: "Intermediate Size Basketball",
        Quantatiy:2
      
      },        
      {
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        Quantatiy:3
      
      }
      ];
  
  




// cart=  JSON.parse(localStorage.getItem("cart"));



// if(!cart){

//   cart=[
//     //   {
//     //   name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//     //   Quantatiy:1
    
//     // }
//     ];
// }





// function saveToStorage(){

//     localStorage.setItem("cart", JSON.stringify(cart))

// }


export function addToCart(productName){

// cart.push({
//     name:productName,
//     Quantatiy:1,
//  })


    let matchCartItem;
    cart.forEach((item)=>{
      if(productName === item.name){
        matchCartItem= item
      }
    })
  
    if(matchCartItem){
      matchCartItem.Quantatiy+=1
    }else{
      cart.push({
        name:productName,
        Quantatiy:1,
     })
    }

    saveToStorage()
  
  
  }

  // console.log(cart)
  
  // cart.forEach((item)=>{
  //   console.log(item.name)
      
  // })

 

  export function removeItem(dataName){
    const newErray=[];
    console.log(newErray)

    cart.forEach((item)=>{
      if(item.name !== dataName){
        newErray.push(item)
   
      }
    })

    cart = newErray
    console.log(newErray)

  }


 

  // console.log(cart)

