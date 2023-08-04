import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../api/product';


const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: productData, isLoading } = useGetProductByIdQuery(id || "");
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
          <div className='' key={productData?.id}>
            <div className='border-2 rounded items-center text-center px-2 py-4'>
              <img src="https://picsum.photos/200/300" alt="" className='h-[100px] w-[200px] mx-auto' />
              <h1 className='py-3'>Tên sản phẩm : {productData?.name}</h1>
              <h3>Giá: {productData?.price}</h3>
              <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2' >Đặt ngay</button>
            </div>
          </div>
    </div>
  )
}

export default Detail