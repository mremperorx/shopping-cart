import { Link } from "react-router-dom";
import ImageSlider from "../Image Slider/ImageSlider";
import Button from 'react-bootstrap/Button';




export function Home() {
    return (     
        <>
        <div className="h-screen w-full">
        <h1>Home</h1>
        <ImageSlider />
        <Link to="/store"><Button className="container">Check here!</Button></Link>
        </div>       
        </>
    ) 
}