import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
        <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Tên sản phẩm:</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Nhập tên sản phẩm" required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Giá sản phẩm:</label>
          <input type="number" id="price" name="price" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Nhập giá sản phẩm" required/>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Thêm</button>
      </form>
    </div>
  )
}

export default ProductDetail