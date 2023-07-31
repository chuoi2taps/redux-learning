import { Button } from "..";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { decrease } from "../../slices/Cart";
import { increase } from "../../slices/Cart";
import ProductList from "../ProductList";

const Cart = () => {
    const products = useAppSelector((state: any) => state.cart.items);
    const dispatch = useAppDispatch();
    return (
        <div>
           <ProductList/>
           <hr className="my-3"/>
           {products?.map((item:any)=>{
            return (
                <div key={item.id}>
                    {item.name} - {item.price} - {item.quantity} - Tổng:
                    {item.price * item.quantity}
                    <button className="px-2 py-3" onClick={()=>dispatch(increase(item.id))}>Increase</button>
                    <button className="px-2 py-3" onClick={()=>dispatch(decrease(item.id))}>Decrease</button>
                </div>
            )
           })}
            Total = {" "}
            {products?.reduce((total:any, item:any)=>total + item.price * item.quantity, 0)}
        </div>
    );
};

export default Cart;