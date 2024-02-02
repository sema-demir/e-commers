import axios from "axios"
import { createContext, useEffect, useState } from "react"
axios
//!context yapısının temelini olusturma
export const ProductContext = createContext()

//!Sağlayıcı ve onun tuttugu verileri tanımla

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(null)
    const [category, setCategory] = useState('all')

    useEffect(() => {
      //önceki ürünleri kaldır, yükleniyor calısır  
        setProducts(null)
        //Belirli kategorideki verileri al

        //hangi urlye istek altılacagını belirle
const url = 
category === 'all'
? 'https://fakestoreapi.com/products'
: `https://fakestoreapi.com/products/category/${category}`
        axios
        .get(url)
        .then((res) =>  setProducts(res.data))
        .catch((err) => console.log(err))
    }, [category])
  
    //context yapısında tuttugumuz verileri bilesenleri saglamak için
    return(<ProductContext.Provider value= {{ products, setCategory, category }}>
{children}
    </ProductContext.Provider>)
}
 
