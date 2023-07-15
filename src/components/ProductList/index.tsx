import { useContext, useEffect } from "react"
import { ProductContext } from "../../context/productContext"
import axios from "axios"


const ProductList = () => {
    // const { products, addProduct, fetchProduct, editProduct, deleteProduct } = useContext(ProductContext)
    // const { count, increment, decrement } = useContext(ProductContext)
    const {state, setState } = useContext(ProductContext)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                setState({ type: "FETCH_PRODUCTS", payload: data });
            } catch (error) { }
        }
        fetchProduct()
    },[])
    const addProduct = async (product: any) => {
        console.log("product", product);
        try {
            // call api
            const { data } = await axios.post(`http://localhost:3000/products/`, product);
            // rerender
            setState({ type: "ADD_PRODUCT", payload: data });
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const editProduct = async (product: any) => {
        console.log("product", product);
        try {
            // call api
            const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
            // rerender
            setState({ type: "EDIT_PRODUCT", payload: data });
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const deleteProduct = async (product: any) => {
        console.log("product", product);
        try {
            // call api
            await axios.delete(`http://localhost:3000/products/${product.id}`);
            // rerender
            setState({ type: "DELETE_PRODUCT", payload: product });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div>
            {state?.products?.map((item: any) =>
            (<div key={item.id}>{item.name}</div>))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => addProduct({ name: "Product C" })}>Add Product</button>
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" onClick={() => editProduct({ name: "Product C updated", id: 3 })}>
                Edit Product
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={() => deleteProduct({ id: 3 })}>
                Delete Product
            </button>

        </div>
    )
}

export default ProductList