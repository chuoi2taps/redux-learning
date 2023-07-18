import { useContext, useEffect } from "react"
import { ProductContext } from "../../context/productContext"
import axios from "axios"
import { useSelector } from "react-redux"


const ProductList = () => {
    const {products} = useSelector((state:any)=>state.productReducer.products)
    console.log("state", products);
    
    return (
        <div>
            {products?.map((product:any)=>(
                <div>{product.name}</div>
            ))}
        </div>
    )
}

export default ProductList