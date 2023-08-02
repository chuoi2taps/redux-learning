import React, { useEffect } from 'react'
import { deleteProduct, getProducts } from '../../actions/product';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { useNavigate } from 'react-router-dom';

type Props = {}

const ProductList = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
    const {products, isLoading, error} = useAppSelector((state:any) => state.products);
    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
      <div className='max-w-7xl mx-auto relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div>
          <button className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded my-2' onClick={()=>navigate("add")}>Thêm sản phẩm </button>
        </div>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3 bg-gray-50 dark:bg-gray-600 '>Id</th>
              <th className='px-6 py-3 '>Name</th>
              <th className='px-6 py-3 bg-gray-50 dark:bg-gray-600 '>Price</th>
              <th className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item:any, index:any)=>
              <tr key={item.id} className='border-b border-gray-200 dark:border-gray-700'>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-600'>{index + 1}</td>
                <td className='px-6 py-4'>{item.name}</td>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-600'>{item.price}</td>
                <td className='px-6 py-4'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2' onClick={()=>navigate(`${item.id}/update`)}>Update</button>
                  <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded' onClick={()=>dispatch(deleteProduct(item.id))}>Delete</button>
                </td>
              </tr>
            )}
            
            </tbody>
        </table>
        </div>
    )
}

export default ProductList