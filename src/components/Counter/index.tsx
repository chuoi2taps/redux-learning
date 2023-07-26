import { useAppDispatch, useAppSelector } from "../../app/hook";
import { increment, decrement, increase, decrease } from "../../slices/Counter";
const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state:any) => state.counter.count);

    return (
        <div className='py-4'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={()=>dispatch(increment())}>Increase</button>
            <span className="px-5">{count}</span>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => dispatch(decrement())}>Decrease</button>
            <br />
            <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => dispatch(increase(10))}> + 100</button>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => dispatch(decrease(10))}> - 100</button>
        </div>
    )
}

export default Counter