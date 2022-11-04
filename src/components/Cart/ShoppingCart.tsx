import {Button, Offcanvas, Stack} from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurreny"
import { CartItem } from "./CartItem"
import StoreItem from "../../data/products.json"
import { Link } from "react-router-dom"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  

    const {closeCart, cartItems} = useShoppingCart()
    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
            <Link to="/checkout"><Button>Checkout</Button></Link>
        </Offcanvas.Body>
    </Offcanvas>
    )
}