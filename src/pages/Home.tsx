import { Link } from "react-router-dom";
import ImageSlider from "../Image Slider/ImageSlider";
import Button from 'react-bootstrap/Button';
import Products from "../components/Products";




export function Home() {
    return (     
        <div>
        <h1>Home</h1>
        <ImageSlider />
        <Products />   
        </div>  
    ) 
}