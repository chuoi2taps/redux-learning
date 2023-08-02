
import React, { useEffect } from 'react'
import { deleteProduct, getProducts } from '../../actions/product';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { useNavigate } from 'react-router-dom';

type Props = {}

const List = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products, isLoading, error } = useAppSelector((state: any) => state.products);
  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch])
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className='max-w-7xl mx-auto'>

      <div className='grid grid-cols-3 gap-4 py-4'>
        {products?.map((item: any) =>
          <div className='' key={item.id}>
            <div className='border-2 rounded items-center text-center px-2 py-4'>
              <img src="https://picsum.photos/200/300" alt="" className='h-[100px] w-[200px] mx-auto' />
              <h1 className='py-3'>Tên sản phẩm : {item.name}</h1>
              <h3>Giá: {item.price}</h3>
              <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2' onClick={() => navigate(`${item.id}`)}>Xem chi tiết</button>
            </div>
          </div>
        )}
      </div>


    </div>
  )
}

export default List