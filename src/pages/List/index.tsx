
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../api/product';


const List = () => {
  const { data: productData, isLoading } = useGetProductsQuery()
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-3 gap-4 py-4'>
        {productData?.map((item: any) =>
          <div className='' key={item.id}>
            <div className='border-2 rounded items-center text-center px-2 py-4'>
              <img src="https://picsum.photos/200/300" alt="" className='h-[100px] w-[200px] mx-auto' />
              <h1 className='py-3'>Tên sản phẩm : {item.name}</h1>
              <h3>Giá: {item.price}</h3>
              <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2' ><Link to={`${item.id}`}>Xem chi tiết</Link></button>
            </div>
          </div>
        )}
      </div>


    </div>
  )
}

export default List