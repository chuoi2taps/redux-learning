import { useState } from 'react'
import './App.css'
import { List } from './components'
import { ICar } from './interfaces/car'
import Form from './components/Form'
import Table from './components/Table'
import ProductList from './components/ProductList'
import Counter from './components/Counter'
import Cart from './components/Cart'

// const carsData = [
//   { id: 1, name: "BMW", price: 1000 },
//   { id: 2, name: "Mercedes", price: 2000 },
//   { id: 3, name: "Audi", price: 3000 },
//   { id: 4, name: "KIA", price: 4000 },
// ]
// const columns = [
//   {
//     title: "Tên sản phẩm",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     key: "price",
//   }
// ]
// const postData = [
//   {id:1, title: "post 1", body: "this is post 1", author:"aduvip"},
//   {id:2, title: "post 2", body: "this is post 2", author:"aduvip 2"},
// ]

function App() {
  // const [cars, setCars] = useState<ICar[]>([])
  // // const [loading, isLoading] = useState<boolean>(true)
  // //const [error, setError] = useState<null>(null)
  // const addCar = (car: ICar) => {
  //   setCars([...cars, car])
  // }
  // const removeCar = (id: number | string) => {
  //   const confirm = window.confirm("Are you sure?")
  //   if (confirm) {
  //     setCars(cars.filter(car => car.id !== id))
  //   }
  // }
  return (
    <>
      {/* <div className="w-96 mx-auto border border-gray-500 p-2">
        <Form onAdd={addCar} />
        <List data={cars} onRemove={removeCar} />
        <hr />
        <br />
        <Table dataSource={carsData} columns={columns} />
      </div> */}
    <div className='w-96 mx-auto border border-gray-500 p-2'>
      <Counter/>
      <ProductList/>
      <hr />
      <br />
      <Cart/>
    </div>


    </>
  )
}

export default App
