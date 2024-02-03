import { useLocalStorage } from "@uidotdev/usehooks";
import  React, { createContext, useState } from "react";
import { toast } from "react-toastify";


 export const BasketContext = createContext()

export function BasketProvider ({children}) {

    const [basket, setBasket] = useLocalStorage('basket', [])

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

toast.info(`Ürün miktarı arttırıldı(${updated.amount})`)

} else{
//ürün sepette yoksa ürünü sepete ekle miktarı 1 esit
setBasket([...basket, {... newProduct, amount: 1}])

toast.success('Ürün Sepete Eklendi')

}


//console.log(basket)

}


//sepetten ürün kaldırma
const removeFromBasket = (delete_id) => {

    //sepetteki ürünü bul
    const found = basket.find((i) => i.id === delete_id)


//miktarı 1den fazlaysa > miktarı 1 eksilt 
    if(found.amount > 1){
        const updated = {...found, amount: found.amount -1 }

        const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
        )
        setBasket(newBasket)

toast.info(`Ürün miktarı azaltıldı(${updated.amount})`)

    }else{//miktarı bire eşitse urunu kaldır
        const filtred = basket.filter((i) => i.id !== delete_id)
        setBasket(filtred)

        toast.error(`Ürün Sepetten Kaldırıldı`)
    }
}

    return(
        <BasketContext.Provider value= {{ basket, addToBasket, removeFromBasket }}>
            {children} 
            {/* //uygulamanın tamamı kullanabilir  */}
        </BasketContext.Provider>
    )
}
