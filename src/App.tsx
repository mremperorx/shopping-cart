import { Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import {Navbar} from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import PaymentGateway from "./PaymentGateWay/PaymentGateway"


function App() {
 return (
 <ShoppingCartProvider >
 <Navbar />
 <Container className="mb-4">
  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/store" element= {<Store/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/checkout" element = {<PaymentGateway/>} />
  </Routes>
 </Container>
 </ShoppingCartProvider >
)
}

export default App
