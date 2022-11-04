import React, { useEffect, useState } from 'react'
import { formatCurrency } from '../utilities/formatCurreny'
import Skeleton from "react-loading-skeleton"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


type ProductsProps = {
    id:number
    title:string
    price: number
    image: string
}

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
               <div className="col-md-3">
                <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                <Skeleton height={350} />
               </div>

            </>
        )
    }


    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat );
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-primary btn-sm btn-outline mr-4" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-primary btn-sm btn-outline mr-4" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-primary btn-sm btn-outline mr-4" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-primary btn-sm btn-outline mr-4" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-primary btn-sm btn-outline mr-4" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>


                {filter.map((product) => {
                          return (
                            <div className='w-full max-w-sm rounded-lg shadow-md' style={{width: "18rem"}}>
                            <div key={product.id}>
                            <Link to="/store">  <img className="p-8 rounded-t-lg" src={product.image} alt="product image"  height="200px" style={{objectFit: "cover"}} /> </Link> 
                           
                                    <div className="flex justify-between items-center text-black">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text ">{formatCurrency  (product.price)}</p>
                                    </div> 
                            </div>
                            </div>
                        
                          )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    )
}

export default Products
