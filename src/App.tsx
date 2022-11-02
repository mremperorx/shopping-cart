import { Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import {Navbar} from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Checkout from "./components/Checkout/Checkout"
import "./App.css"
import CreditCard from "./components/Checkout/creditCard/CreditCard"
import ProfilePage from "./pages/ProfilePage"


function App() {
 return (
  <div className="font-inter gap-y-8 flex-col justify-center items-center dark:bg-gray-300 ">
 <ShoppingCartProvider>
 <Navbar />
 <Container>
  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/store" element= {<Store/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/checkout" element = {<Checkout/>} />
    <Route path="/creditcard" element = {<CreditCard />} />
    <Route path="/profile" element = {<ProfilePage />} />
  </Routes>
 </Container>
 </ShoppingCartProvider >
 </div>
)
}

export default App
