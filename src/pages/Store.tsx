import storeItems from "../data/products.json"
import { Col, Row} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import { motion } from "framer-motion"

export function Store() {
    return ( 
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
         <Col key={item.id}>
            <StoreItem {...item} />
         </Col>
        ))}
    </Row>
    </motion.div>
    ) 
}