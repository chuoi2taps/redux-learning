import React, { useContext } from 'react'
import { CounterContext } from '../../context/counterContext'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector((state:any)=>state.counter.count)
    return (
        <div className='py-4'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={()=>dispatch({type:"INCREMENT"})}>Increase</button>
            <span className="px-5">{state}</span>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => dispatch({type:"DECREMENT"})}>Decrease</button>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => dispatch({type:"INCREASE", payload:100})}> + 100</button>
        </div>
    )
}

export default Counter