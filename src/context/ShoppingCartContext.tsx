import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {ShoppingCart} from "../components/Cart/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)



export function useShoppingCart() {
    return useContext(ShoppingCartContext)

}


export function ShoppingCartProvider ({ children } : ShoppingCartProviderProps) 
{
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage <CartItem[]> ("shopping-cart", [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0 )

    const openCart = () => setIsOpen(true)
    const closeCart =() => setIsOpen(false)

    function getItemQuantity(id:number ){
        
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id:number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...cartItems, {id, quantity: 1}]
            }else{
                return currItems.map(item => {
                    if (item.id === id){
                    return {...item, quantity: item.quantity +1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    
    function decreaseCartQuantity(id:number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if (item.id === id){
                    return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id:number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const [menItems, setMenItems] = useState([]);
	const [womenItems, setWomenItems] = useState([]);

    const fetchMenItems = async () => {
		const data = await fetch(
			"https://fakestoreapi.com/products/category/men's%20clothing"
		);
		const formattedData = await data.json();
		const updatedData = formattedData.map((item: any) => {
			return { ...item, inWishlist: false };
		});
		setMenItems(updatedData);
	};


    const fetchWomenItems = async () => {
		const data = await fetch(
			"https://fakestoreapi.com/products/category/women's%20clothing"
		);
		const formattedData = await data.json();
		const updatedData = formattedData.map((item: any) => {
			return { ...item, inWishlist: false };
		});
		setWomenItems(updatedData);
	};
    
    useEffect(() => {
		fetchMenItems();
		fetchWomenItems();
	}, []);


     return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
            {children}
            <ShoppingCart isOpen ={isOpen} />
        </ShoppingCartContext.Provider>
     )
}