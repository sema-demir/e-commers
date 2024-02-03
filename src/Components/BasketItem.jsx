
export const BasketItem = ({item, addToBasket, removeFromBasket}) => {
  return (
    <div className="d-flex gap-3 flex-md-row justify-content-between align-items-center">
    <div className="d-flex gap-3 align-items-center">
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

    <div className="d-flex justify-content-between align-items-center gap-3">
      <h4 className="text-success text-nowrap">{item.price}</h4>
      <p className="d-flex align-items-center gap-1 text-nowrap">
        <span>Miktar:</span>
        <span className="fw-bold">{item.amount} </span>{" "}
      </p>

      <div className="d-flex gap-2">
        <button onClick={() => removeFromBasket(item.id)}  className="btn btn-danger">-</button>
        <button onClick={() => addToBasket(item)} className="btn btn-success">+</button>
      </div>
    </div>
  </div>
  )
}
