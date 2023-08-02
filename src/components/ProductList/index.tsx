import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../../actions/product";
import { add } from "../../slices/Cart";
import { useGetProductsQuery } from "../../api/product";


const ProductList = () => {
    const dispatch = useAppDispatch();
    // const {products, isLoading, error} = useAppSelector((state:any) => state.products);
    // useEffect(() => {
    //     dispatch(getProducts())

    // }, [dispatch])
    const {data:products, error, isLoading} = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error){ 
        if ("status" in error && "data" in error) {
            return (
                <div>
                    {error.status} - {JSON.stringify(error.data)}
                </div>
            );
        }
    }
    
    return (
        <div>
            {products?.map((item:any)=><div key={item.id}>{item.name}
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" onClick={() =>dispatch(add({...item, quantity: 1}))}>
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