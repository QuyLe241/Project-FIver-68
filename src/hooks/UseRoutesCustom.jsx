import React from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../templates/UserTemplate/UserTemplate";
import { pathDefault } from "../common/path";
import RegisterPage from "../page/Register/RegisterPage";
import LoginPage from "../page/Login/LoginPage";
import ListJobPage from "../page/ListJobPage/ListJobPage";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate";
import AdminLogin from "../page/AdminLogin/AdminLogin";
// import ManagerUser from "../page/ManagerUser/ManagerUser";
import CreateUser from "../page/CreateUser/CreateUser";
import { Suspense } from "react";
import { Skeleton } from "antd";

//    giảm lưu lượng file JS cần tải, khi người chưa cần vào trang quan trọng
//    lazy và suspense(cấu hình ở element)
//
const ManagerUser = React.lazy(() => import("../page/ManagerUser/ManagerUser"));

const UseRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: pathDefault.listJob,
          element: <ListJobPage />,
        },
      ],
    },
    {
      path: pathDefault.register,
      element: <RegisterPage />,
    },
    {
      path: pathDefault.login,
      element: <LoginPage />,
    },
    {
      path: pathDefault.adminTemplate,
      element: <AdminTemplate />,
      children: [
        {
          // path: pathDefault.managerUser,
          //  fallback dừng người dùng khi page chưa tải xong
          index: true,
          element: (
            <Suspense fallback={<Skeleton />}>
              {" "}
              <ManagerUser />
            </Suspense>
          ),
        },
        {
          path: pathDefault.createUser,
          element: <CreateUser />,
        },
      ],
    },
    {
      path: pathDefault.adminLogin,
      element: <AdminLogin />,
    },
  ]);
  return routes;
};

export default UseRoutesCustom;
