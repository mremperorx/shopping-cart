import { Navbar } from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import "./App.css"
import { toast, ToastContainer } from "react-toastify"
import AnimatedRoutes from "./components/AnimatedRoutes"
import { useEffect, useState } from "react"
import PacmanLoader from "react-spinners/ClipLoader";




function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <div className="text-center justify-center items-center">
        {loading ? (
          <PacmanLoader
            color="#36d7b7"
            size={200}
            loading={loading}
          />) : (
          <div className="text-black font-inter gap-y-2 flex-col justify-center items-center">
            <ShoppingCartProvider>
              <Navbar />
              <AnimatedRoutes />
            </ShoppingCartProvider >
          </div>
        )}
      </div>
    </>

  )
}

export default App