import { useContext } from "react";
import { BasketContext } from "../Context/basketContext";

const CheckoutPage = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div className="container my-5">
      <div className="d-flex flex-column gap-5">
        {basket.map((item) => (
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex align-items-center">
              <div className="rounded bg-white">
                <img
                  className="object-fit-contain"
                  width={60}
                  height={60}
                  src={item.image}
                />
              </div>
              <h4 className="text-truncate">{item.title.slice(0,10) + '...'}</h4>
            </div>

            <div className="d-flex align-items-center">
              <h4>{item.price}</h4>
              <p className="d-flex align-items-center gap-1 text-nowrap">
                <span>Miktar:</span>
                <span className="fw-bold">{item.amount} </span>{" "}
              </p>

              <div className="d-flex gap-2">
                <button className="btn btn-danger">-</button>
                <button className="btn btn-success">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
