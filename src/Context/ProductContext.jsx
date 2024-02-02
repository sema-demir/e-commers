import axios from "axios"
import { createContext, useEffect, useState } from "react"
axios
//!context yapısının temelini olusturma
export const ProductContext = createContext()

//!Sağlayıcı ve onun tuttugu verileri tanımla

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(null)
    const [category, setCategory] = useState(null)

    useEffect(() => {
        axios
        .get('https://fakestoreapi.com/products')
        .then((res) =>  setProducts(res.data))

    }, [])
  
    //context yapısında tuttugumuz verileri bilesenleri saglamak için
    return(<ProductContext.Provider value= {{ products, category}}>
{children}
    </ProductContext.Provider>)
}
 
