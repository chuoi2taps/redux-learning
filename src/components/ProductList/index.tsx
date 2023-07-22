import { useContext, useEffect } from "react"
import { ProductContext } from "../../context/productContext"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../../actions/product"
import { Dispatch } from "redux"


const ProductList = () => {
    const dispatch:Dispatch<any> = useDispatch()
    const {products, isLoading,error} = useSelector((state:any)=>state.products)
    
    useEffect(()=>{
        dispatch(fetchProducts() as any)
    },[dispatch])
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products.map((item:any)=><div key={item.id}>{item.name}
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" onClick={() =>dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })}>
                        Add to cart
            </button>
                    </div>)
            }
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={()=>dispatch(addProduct({name:"product C"}))}>Add</button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded" onClick={()=>dispatch(updateProduct({name:"product C updated", id: 3}))}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={()=>dispatch(deleteProduct(3))}>Delete</button>
            
        </div>
    )
}

export default ProductList