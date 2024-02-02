import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import HomePage from "./Pages/HomePage"
import Checkout from "./Pages/CheckoutPage"


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App