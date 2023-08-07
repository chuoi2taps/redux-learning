
import {
    AiFillFile,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai';
import { Button, MenuProps, Row } from 'antd';
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}



const WebsiteLayout = () => {
  const items: MenuItem[] = [
    getItem(<Link to={"/"}>Home</Link>, "home", <AiOutlineHome />),
    getItem(<Link to={"/products"}>Products</Link>, "products", <AiFillFile />),
    getItem(<Link to={"/admin"}>Admin</Link>, "admin", <AiOutlineUser />),
    
  ];
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ display: 'flex', justifyContent: 'center' }}
        />
        
      </Header>
      <Content className='py-[50px]'>
        <div className='mx-8'>

        </div>
        <div className="site-layout-content" >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default WebsiteLayout;