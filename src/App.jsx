import { useState, createContext } from "react";
import UseRoutesCustom from "./hooks/UseRoutesCustom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AutoComplete } from "antd";
import React from "react";
// import { createContext } from "react";

export const NotificationContext = React.createContext();

function App() {
  const handleNotification = (content, type) => {
    //    Sử dụng tostify để thông báo khi người dùng tương tác với trang web
    //    [type] dùng để gọi đến type và kiểm tra err hay secces để đổi màu toastify
    toast[type](content, {
      position: "top-right",
      autoClose: 2000,
      pauseOnHover: true,
      hideProgressBar: false,
      //    type sẽ được truyền xuống đây
    });
  };
  const routes = UseRoutesCustom();
  return (
    <NotificationContext.Provider
      value={{
        handleNotification,
      }}
    >
      {routes}
      <ToastContainer />
    </NotificationContext.Provider>
  );
}

export default App;
