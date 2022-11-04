import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import StoreItem from "../../data/products.json"
import { formatCurrency } from "../../utilities/formatCurreny"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity} : CartItemProps){
     const {removeFromCart} = useShoppingCart()
     const item = StoreItem.find (i => i.id === id)
     if (item == null)  return null

     return (
        <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
            <img src={item.image} style={{ width: "125px", height: "75", objectFit: "cover"}} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && (<span className="text-muted" style={{ fontSize: ".65"}}>
                       x {quantity}
                       </span>
                        )}
                </div>
                <div className="text-muted" style={{ fontSize: ".65"}}>
                {formatCurrency(item.price)}
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
     )
}