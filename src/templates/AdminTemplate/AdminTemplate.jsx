import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { getLocalStorage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { getValueUserApi } from "../../redux/nguoiDungSlice";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  //  bắn tín hiệu lên store redux
  const dispatch = useDispatch();

  // Trước khi cho người dùng vào trang admin  :  kiểm tra người dùng có phải là admin không
  useEffect(() => {
    let dataLocal = getLocalStorage("user");
    console.log(dataLocal);
    dataLocal.user.role != "ADMIN"
      ? (window.location.href = "https://google.com")
      : null;
  }, []);

  //    bắn tín hiệu lên store để lấy api về khi trang web load xong
  //    chuyển đến ManagerUser
  // useEffect(() => {
  //   dispatch(getValueUserApi());
  // }, []);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link>Người dùng</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link>Công việc</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link>Thuê công việc</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminTemplate;
