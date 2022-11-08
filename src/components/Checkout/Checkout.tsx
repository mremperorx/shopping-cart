import { Button, Stack } from "react-bootstrap"
import { CartItem } from "../Cart/CartItem"
import StoreItem from "../../data/products.json"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurreny"
import { Link } from "react-router-dom"



const Checkout =() => {
  const {cartItems} = useShoppingCart()
  return (
    <div>
    <h1>Checkout</h1>
    <br />
    <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} /> 
          ))}
          <div className="ms-auto fw-blod fs-5">
            Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                const item = StoreItem.find (i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
            }, 0)
            )}
          </div>
        </Stack>
        
        <Link to="/paypal"><Button className="container">Pay!</Button></Link>
    </div>
  )
}

export default Checkout