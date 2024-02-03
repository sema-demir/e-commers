import  React, { createContext, useState } from "react";


 export const BasketContext = createContext()

export function BasketProvider ({children}) {

    const [basket, setBasket] = useState([])

//sepete ürun ekleme
const addToBasket = (newProduct) =>{

   // üründen sepette varmı kontrol et
const found = basket.find((i) => i.id === newProduct.id) 

//console.log(found)
if(found){
//ürün sepette varsa 1 attır
const updated = {...found, amount: found.amount + 1 }


//sepet dizisindeki eski ürünün yerine güncel halini koy
const newBasket = basket.map((item) => 
item.id === updated.id ? updated : item)

//state i güncelle
setBasket(newBasket)

} else{
//ürün sepette yoksa ürünü sepete ekle miktarı 1 esit
setBasket([...basket, {... newProduct, amount: 1}])

}


//console.log(basket)

}


//sepetten ürün kaldırma

    return(
        <BasketContext.Provider value= {{ basket, addToBasket }}>
            {children} 
            {/* //uygulamanın tamamı kullanabilir  */}
        </BasketContext.Provider>
    )
}
