import { useContext } from "react";
import { BasketContext } from "../Context/basketContext";
import { BasketItem } from "../Components/BasketItem";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);
 
 const totalAmount = basket.reduce(
  (total, i) => total + i.amount, 0
 )
 const totalPrice = basket.reduce(
  (total, i) => total + i.price * i.amount, 0
 )
 
  return (
    <div className="container my-5">
      <div className="d-flex  flex-column gap-5">
        {/* sepette ürün vyoksa */}
{basket.length === 0 && (
  <p className="text-center my-5">
    <span className="mx-3">Sepetinize Ürün Ekleyiniz </span>
    <Link to= {'/'}>Ürünler</Link>
    
  </p>
)}

        {/* sepette ürün varsa */}
        {basket?.map((item) => (
         <BasketItem 
         key={item.id} item= {item} 
         addToBasket= {addToBasket} 
         removeFromBasket={removeFromBasket} />
        ))}
      </div>
<div className="border p-5 rounded my-5 fs-4">
  <p>Sepetteki Ürün:  <span className="text-warning">{totalAmount}</span> adet</p>
  <p>Toplam Fiyat: <span className="text-succes">{totalPrice.toFixed(2)} ₺ </span> </p>
</div>

    </div>
  );
};

export default CheckoutPage;
