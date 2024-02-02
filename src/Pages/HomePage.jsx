import { useContext } from "react"
import { ProductContext } from "../Context/ProductContext"
import Loader from "../Components/Loader"
import Card from "../Components/Card"


const HomePage = () => {

  const { products } = useContext(ProductContext)

  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
      {/* veriler gelmediyse yukleniyor bas */}
{!products && <Loader />}

{/* veriler geldiyse her biri için kart bas */}
{products?.map((product) => (
 <Card key={product.id} product= {product} />
))}

    </div>
  )
}

export default HomePage