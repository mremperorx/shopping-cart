import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Checkout from "./components/Checkout/Checkout"
import "./App.css"
import Paypal from "./components/Checkout/PayPal/PayPal"
import ProfilePage from "./pages/ProfilePage"
import { toast, ToastContainer } from "react-toastify"




function App() {

  toast.success('Successfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  
  return (
    <>
      <div className="text-black font-inter gap-y-8 flex-col justify-center items-center">
        <ShoppingCartProvider>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/paypal" element={<Paypal />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Container>
        </ShoppingCartProvider >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  )
}

export default App