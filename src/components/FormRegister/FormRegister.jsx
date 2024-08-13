import React from "react";
import InputCustom from "../Input/InputCustom";
import { DatePicker, Space } from "antd";

const FormRegister = () => {
  return (
    <div>
      <h1
        className="text-center"
        style={{ fontSize: "25px", fontWeight: "700" }}
      >
        Đăng ký
      </h1>
      <form action="">
        {/*       flex-wrap : khi các phần tử vượt quá 100% sẽ tự động xuông dòng */}
        <div className="flex flex-wrap">
          <InputCustom
            contentLable={"Họ và Tên"}
            name={"name"}
            placeHolder={"Nhập tên của bạn"}
            classWrapper={"w-1/2 p-3"}
          />
          <InputCustom
            contentLable={"Email"}
            name={"email"}
            placeHolder={"Nhập email của bạn"}
            classWrapper={"w-1/2 p-3"}
          />
          <InputCustom
            contentLable={"Mật khẩu"}
            name={"password"}
            placeHolder={"Nhập mật khẩu"}
            classWrapper={"w-full p-3"}
            type="password"
          />
          <InputCustom
            contentLable={"Số điện thoại"}
            name={"phone"}
            placeHolder={"Nhập số điện thoại của bạn"}
            classWrapper={"w-full p-3"}
          />
          <div className="w-1/2 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ngày sinh
            </label>
            <DatePicker />
          </div>
          <div className="w-1/2 p-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Giới tính
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Chọn giới tính</option>
                <option value="US">Nam</option>
                <option value="CA">Nữ</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
