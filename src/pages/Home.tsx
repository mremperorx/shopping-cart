import { Link } from "react-router-dom";
import ImageSlider from "../Image Slider/ImageSlider";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from 'react-bootstrap/Button';




export function Home() {
    return (     
        <div className="h-screen w-full">
        <h1>Home</h1>
        <ImageSlider />
        <Link to="/store"><Button>Check here!</Button></Link>
        </div>
    ) 
}