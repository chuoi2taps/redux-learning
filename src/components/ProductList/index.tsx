import { Table, Button, Skeleton, Popconfirm, Alert, } from "antd";
import { Link } from "react-router-dom";
import { IProduct } from '../../interfaces/product';
import { useGetProductsQuery, useRemoveProductMutation } from '../../api/product';
const ProductList = () => {
  const { data: productData, isLoading } = useGetProductsQuery()
  const [removeProduct, { isLoading: isRemoving, isSuccess: isRemovingSuccess }] = useRemoveProductMutation()
  const confirm = (id: number) => {
    removeProduct(id)
  }
  const dataSource = productData?.map(({ id, name, price, description}: IProduct) => ({
    key: id,
    name,
    price,
    description,
  }));
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Action",
      render: ({ key: id }: any) => {
        return (
          <>
            <div className="flex space-x-2">
              <Popconfirm
                title="U Sure ?"
                onConfirm={() => confirm(id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type='primary' className='bg-red-500 hover:bg-red-700 text-white rounded text-center'>
                  Delete
                </Button>
              </Popconfirm>

              <Button type="primary" className='bg-green-500 hover:bg-green-700 text-white rounded text-center ' >
                <Link to={`/admin/products/${id}/edit`}>Edit</Link>
              </Button>
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div className='max-w-7xl mx-auto'>
      <header className="mb-5 flex justify-between items-center">
        <h2 className="font-bold text-3xl">Product Management</h2>
        <Button type="primary" className='bg-orange-500 hover:bg-orange-700 text-white rounded text-center'>
          <Link to="/admin/products/add">
            Add new product
          </Link>
        </Button>
      </header>
      {isRemovingSuccess && <Alert message={"Delete product successfully"} type="success" />}
      {isLoading ? <Skeleton active /> : <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 3, showQuickJumper: true }}/>}
    </div>
  )
}

export default ProductList