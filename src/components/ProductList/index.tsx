import { useContext, useEffect } from "react"
import { ProductContext } from "../../context/productContext"
import axios from 'axios'
const ProductList = () => {
    const {state, dispatch} = useContext(ProductContext)
    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const {data} = await axios.get(`http://localhost:3000/products/`)
                dispatch({type: "FETCHING", payload: data})
            }
            catch(error){

            }
        }
        fetchProduct()
    },[])
    const addProduct = async (product:any)=>{
        try{
            const {data} = await axios.post(`http://localhost:3000/products/`, product)
            dispatch({type: "ADD", payload: data})
        }
        catch(error){

        }
    }
    const deleteProduct = async (id:any)=>{
        try{
            await axios.delete(`http://localhost:3000/products/${id}`)
            dispatch({type: "DELETE", payload: id})
        }
        catch(error){

        }
    }
    const updateProduct = async (product:any)=>{
        try{
            const {data} = await axios.put(`http://localhost:3000/products/${product.id}`, product)
            dispatch({type: "UPDATE", payload: data})
        }
        catch(error){

        }
    }
    return (
        <div>
            {state?.products?.map((item:any)=>(
                <div key={item.id}>{item.name}</div>
            ))}
            <button className="bg-blue-500 rounded text-white font-bold py-2 px-4 hover:bg-blue-400" onClick={()=>addProduct({name:"product C"})}>Add</button>
            <button className="bg-blue-500 rounded text-white font-bold py-2 px-4 hover:bg-blue-400" onClick={()=>updateProduct({name:"product C updated", id: 3})}>Update</button>
            <button className="bg-blue-500 rounded text-white font-bold py-2 px-4 hover:bg-blue-400" onClick={()=>deleteProduct(3)}>delete</button>


        </div>
    )
}

export default ProductList