import { useState } from 'react'
import './App.css'
import { List } from './components'
import { ICar } from './interfaces/car'
import Form from './components/Form'
import Table from './components/Table'
import ProductList from './components/ProductList'
import Counter from './components/Counter'


function App() {
  return (
    <>
    <div className='w-96 mx-auto border border-gray-500 p-2'>
      <ProductList/>
    </div>


    </>
  )
}

export default App
