import React from "react";
import InputCustom from "../Input/InputCustom";
import { DatePicker, Space } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { notiValidation } from "../../common/notiValidation";
import Password from "antd/es/input/Password";

const FormRegister = () => {
  //  setFieldValue : thuộc tính thay thế khi inout không có name
  //    các trang web sử dụng chung form đăng ký , đăng nhập:
  //  để không bị vướn lại ở bước validation email, phone, date,..
  //  người ta sẽ tạo ra một biến để lưu validation và sử dụng điều kiện để kiểm tra đăng ký và đăng nhập
  const {
    values,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      passWord: "",
      phone: "",
      birthday: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^[A-Za-zÀ-ỹà-ỹ]+$/, "Vui lòng nhập không có số"),
      email: yup
        .string()
        .email("Nhập đúng định dạng email")
        .required("Vui lòng không bỏ trống"),
      passWord: yup
        .string()
        .matches(
          /^(?=.*[A-Z])(?=.*\d).+$/,
          "Vui lòng nhập ít nhất một chữ cái và một chữ số"
        )
        .required("Vui lòng không bỏ trống"),
      phone: yup
        .string()
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "Vui lòng nhập đúng số điện thoại"
        )
        .required("Vui lòng không bỏ trống"),
      birthday: yup.string().required("Vui lòng không bỏ trống"),
      gender: yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  return (
    <div className="flex justify-center flex-col items-center h-full">
      <h1
        className="text-center"
        style={{ fontSize: "25px", fontWeight: "700" }}
      >
        Đăng ký
      </h1>
      <form action="" onSubmit={handleSubmit}>
        {/*       flex-wrap : khi các phần tử vượt quá 100% sẽ tự động xuông dòng */}
        <div className="flex flex-wrap">
          <InputCustom
            contentLable={"Họ và Tên"}
            name={"name"}
            placeHolder={"Nhập tên của bạn"}
            classWrapper={"w-1/2 p-3"}
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.name}
            handleSubmit={handleSubmit}
            error={errors.name}
          />
          <InputCustom
            contentLable={"Email"}
            name={"email"}
            placeHolder={"Nhập email của bạn"}
            classWrapper={"w-1/2 p-3"}
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.email}
            handleSubmit={handleSubmit}
            error={errors.email}
          />
          <InputCustom
            contentLable={"Mật khẩu"}
            name={"passWord"}
            placeHolder={"Nhập mật khẩu"}
            classWrapper={"w-full p-3"}
            type="passWord"
            value={values.passWord}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.passWord}
            handleSubmit={handleSubmit}
            error={errors.passWord}
          />
          <InputCustom
            contentLable={"Số điện thoại"}
            name={"phone"}
            placeHolder={"Nhập số điện thoại của bạn"}
            classWrapper={"w-full p-3"}
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.phone}
            handleSubmit={handleSubmit}
            error={errors.phone}
          />
          <div className="w-1/2 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ngày sinh
            </label>
            <DatePicker
              className="w-full"
              onChange={(dayjs, dayString) => {
                setFieldValue("birthday", dayString);
              }}
              format={"DD-MM-YYYY"}
            />
            {errors.birthday && touched.birthday ? (
              <p className="text-red-500">{errors.birthday}</p>
            ) : null}
          </div>
          <div className="w-1/2 p-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Giới tính
              </label>
              <select
                name="gender"
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="">Chọn giới tính</option>
                <option value="US">Nam</option>
                <option value="CA">Nữ</option>
              </select>
              {errors.gender && touched.gender ? (
                <p className="text-red-500">{errors.gender}</p>
              ) : null}
            </div>
          </div>
          <div className="w-full p-3">
            <button
              type="submit"
              onSubmit={(e) => {
                e.target.value;
              }}
              className="bg-black text-white rounded-lg w-full py-3 px-6"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
