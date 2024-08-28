import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/svg/logoHeader.svg";
import IconLogoHeader from "../../icon/IconLogoHeader";
import { pathDefault } from "../../common/path.js";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./header.scss";
import LinkCustom from "../LinkCustom/LinkCustom.jsx";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct.jsx";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const Header = () => {
  return (
    //    chỉnh container tại file configTailwind
    <header className="py-5">
      <div className="container mx-auto px-2">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex items-center space-x-3">
            {/*   Sử dụng thẻ svg bằng cách tạo ra component chứa thẻ svg và gọi đến component header */}
            <Link to={pathDefault.homePage}>
              <IconLogoHeader />
            </Link>
            <FormSearchProduct />
          </div>
          <nav className="header_navigation space-x-5">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-sm duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Click me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <button>English</button>
            <a href="#">Become a seller</a>
            <LinkCustom
              content={"Đăng nhập"}
              to={pathDefault.login}
              className={"border border-green-500 text-green-500 btn_login"}
            />
            <LinkCustom
              content={"Đăng ký"}
              to={pathDefault.register}
              className={"border bg-green-500 text-white btn_register"}
            />
            {/* <Link to={"/"}>Đăng ký</Link>
            <Link to={"/"}>Đăng nhập</Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
