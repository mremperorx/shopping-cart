import { useState } from "react"
import {Badge, Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {Link, NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import  LoginButton  from "./Login/LoginButton"
import LogoutButton from "./Login/LogoutButton"



export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
    const [open, setOpen] = useState(false)

    return (      


<nav>
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/V-logo.svg" className="mr-3 h-6 sm:h-9" alt="Victorious Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Victorious Store</span>
        </div>
        <div className="flex items-center md:order-2">
            <div className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2">
            <LoginButton />
            </div>
            <LogoutButton />

            <Link to="/profile"><button className="text-white rounded-full bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Profile</button></Link>

            {cartQuantity > 0 && (<Button onClick={openCart} style={{width: "3rem", height: "3rem", position: "relative"}}
                variant="outline-primary"
                className="rounded-circle">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-item-center" style={{color: "white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom: 0, right: 0, transform:"translate(25%, 25%", }}>
                    {cartQuantity}
                </div>
                </Button> )}
           


            <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false" onClick={() => setOpen(!open)}>
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <nav id="mega-menu" className={`${open ? "block" : "hidden"}  justify-between items-center text-center w-full text-sm md:flex md:w-auto md:order-1`} >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                
                    <Link to="/home" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 " aria-current="page"><button>Home</button></Link>
                  
                    <Link to="/store" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 "> <button>Store</button></Link>
                       
                    <Link to="/about" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 "><button>About Us</button></Link>
            </ul>
        </nav>
    </div>
</nav>

    )
}
