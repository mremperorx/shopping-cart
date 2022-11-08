import { Container } from 'react-bootstrap'
import { Route, Routes, useLocation } from 'react-router-dom'
import { About} from '../pages/About'
import { Home } from '../pages/Home'
import ProfilePage from '../pages/ProfilePage'
import { Store } from '../pages/Store'
import Checkout from './Checkout/Checkout'
import Paypal from "./../components/Checkout/PayPal/PayPal"
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Container>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/paypal" element={<Paypal />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </Container>
  </AnimatePresence>
  )
}

export default AnimatedRoutes