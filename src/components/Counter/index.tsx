import React, { useContext } from 'react'
import { CounterContext } from '../../context/counterContext'

const Counter = () => {
    const { state, setState } = useContext(CounterContext)

    return (
        <div className='py-4'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={()=>setState({type:"INCREMENT"})}>Increase</button>
            <span className="px-5">{state.count}</span>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => setState({type:"DECREMENT"})}>Decrease</button>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => setState({type:"INCREASE", payload:100})}> + 100</button>
        </div>
    )
}

export default Counter