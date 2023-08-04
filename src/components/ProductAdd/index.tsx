import { useAddProductMutation } from "../../api/product";
import { IProduct } from "../../interfaces/product";
import { Form, Button, Input,Spin,message } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
type FieldType = {
  name: string;
  price: number;
};
const ProductAdd = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Add product successfully',
    });
  };

  const [addProduct, { isLoading }] = useAddProductMutation();
  const navigate = useNavigate();
  const onFinish = (values: IProduct) => {
    addProduct(values)
      .unwrap()
      .then(() => navigate("/admin/products"));
  };
  return (
    <div>
      <header className="mb-4">
        <h2 className="font-bold text-2xl">Add Product</h2>
      </header>
      {contextHolder}
      <Form
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
            { min: 3, message: "At least 3 letters" },
            { whitespace: true, message: "No whitespace !" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> 
        label="Price"
        name="price" 
        rules={[
          { required: true, message: "Input your product price !"},
          { whitespace: true, message: "No whitespace !" },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="mx-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded text-center" onClick={() => success()}>
            {isLoading ? (
              <AiOutlineLoading3Quarters className = "animate-spin" />
            ) : (
              "Add new product"
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

export default ProductAdd;