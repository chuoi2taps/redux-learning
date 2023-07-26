import { useContext, useEffect } from "react"
import { ProductContext } from "../../context/productContext"
import axios from "axios"
const ProductList = () => {
    const {state, dispatch} = useContext(ProductContext)
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const {data} = await axios.get("http://localhost:3000/products")
                dispatch({type: "FETCHING", payload: data})

            }
            catch(error) {
                console.log(error)
            }
        }
        fetchProducts()
    },[dispatch])

    const addProduct = async (product:any) => {
        try{
            const {data} = await axios.post("http://localhost:3000/products", product)
            dispatch({type:"ADD", payload: data})
        }
        catch(error) {
            console.log(error)
        }
    }
    const updateProduct = async (product:any) => {
        try{
            const {data} = await axios.put(`http://localhost:3000/products/${product.id}`, product)
            dispatch({type:"UPDATE", payload: data})
        }
        catch(error){
            console.log(error)
        }
    } 
    const deleteProduct = async (id:number) => {
        try{
            await axios.delete(`http://localhost:3000/products/${id}`)
            dispatch({type:"DELETE", payload: id})
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            {state?.products?.map((item:any)=>(
                <div key={item.id}>{item.name}</div>
            ))}
            <button className="bg-blue-500 rounded text-white font-bold py-2 px-4 hover:bg-blue-400" onClick={()=>addProduct({name:"product C"})}>Add</button>
            <button className="bg-gray-500 rounded text-white font-bold py-2 px-4 mx-4 hover:bg-gray-400" onClick={()=>updateProduct({name:"product C updated", id: 3})}>Update</button>
            <button className="bg-red-500 rounded text-white font-bold py-2 px-4 hover:bg-red-400" onClick={()=>deleteProduct(3)}>Delete</button>
        </div>
    )
}

export default ProductList