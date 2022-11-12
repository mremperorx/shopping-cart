
import ImageSlider from "../ImageSlider/ImageSlider";
import Products from "../components/Products";
import { motion } from "framer-motion";





export function Home() {
    return (

        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
            <h1>Home</h1>
            <ImageSlider />
            <Products />
        </motion.div>
    )
}