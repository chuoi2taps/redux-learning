import { useAddProductMutation, useGetProductByIdQuery, useUpdateProductMutation } from "../../api/product";
import { IProduct } from "../../interfaces/product";
import { Form, Button, Input, Spin, message } from "antd";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
type FieldType = {
  name: string;
  price: number;
};
const ProductEdit = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Update product successfully',
    });
  };
  const { id } = useParams<{ id: string }>();
  const { data: productData, isLoading } = useGetProductByIdQuery(id || "");

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      name: productData?.name,
      price: productData?.price,
    });
  }, [productData]);

  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  const onFinish = (values: IProduct) => {
    updateProduct({ ...values, id: id })
      .unwrap()
      .then(() => navigate("/admin/products"));
  };
  return (
    <div>
      <header className="mb-4">
        <h2 className="font-bold text-2xl">Edit Product : {productData?.name}</h2>
      </header>
      {contextHolder}
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Product Name"
          name="name"
          rules={[
            { required: true, message: "Input your product name !" },
            { min: 3, message: "At least 3 letters " },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Price" name="price">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="mx-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded text-center" onClick={() => success()}>
            {isLoading ? (
              <Spin />
            ) : (
              "Update"
            )}
          </Button>
          <Button
            type="primary"
            className="mx-2 bg-gray-500 hover:bg-gray-700 text-white rounded text-center"
            onClick={() => navigate("/admin/products")}
          >
            Return to Admin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductEdit;