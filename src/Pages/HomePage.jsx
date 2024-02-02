import { useContext } from "react"
import { ProductContext } from "../Context/ProductContext"
import Loader from "../Components/Loader"
import Card from "../Components/Card"


const HomePage = () => {

  const { products, category } = useContext(ProductContext)

  return (
    <div className container>
<h2 className="my-4" >{category && category} </h2>

    <div className=" d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
      {/* veriler gelmediyse yukleniyor bas */}
{!products && <Loader />}

{/* veriler geldiyse her biri için kart bas */}
{products?.map((product) => (
 <Card key={product.id} product= {product} />
))}

    </div>
    </div>
  )
}

export default HomePage