import { motion } from "framer-motion";

export function About() {
    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
   <h1>Working on About Page...!</h1>
    </motion.div>
)}