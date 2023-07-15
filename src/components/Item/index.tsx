import React from 'react'
import { Button } from '..'
import { ICar } from '../../interfaces/car'
import { GoTrash } from "react-icons/go";
type ItemProps = {
  car:ICar;
  onRemove: (id:number|string)=>void
}

const Item = ({car,onRemove}:ItemProps) => {
  return (
    <li className='flex justify-between items-center p-2'>
      {car.name}
      <Button type='danger' icon={<GoTrash/>} onClick={()=>onRemove(car.id!)}/>
    </li>
  )
}

export default Item