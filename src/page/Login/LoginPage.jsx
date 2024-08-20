import React from "react";
import ImgLogin from "../../Img/LoginImg.png";
import InputCustom from "../../components/Input/InputCustom";
import { Link } from "react-router-dom";
import { pathDefault } from "../../common/path";
import * as yup from "yup";
import { useFormik } from "formik";
import { Value } from "sass";
import { useState } from "react";

const LoginPage = () => {
  //    sử dụng state để kiểm tra tra dữ liệu hợp lệ
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    onSubmit: (values) => {
      //    kiểm tra dữ liệu đã thành công
      setIsSubmitted(true);
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .resolve("Hợp lệ")
        .required("Vui lòng không bỏ trống")
        .email("Vui lòng nhập đúng định dạng email"),
      passWord: yup
        .string()
        .resolve("Hợp lệ")
        .defined("Hợp lệ")
        .required("Vui lòng không bỏ trống")
        .min(6, "Nhập tối thiểu 6 ký tự")
        .max(10, "Nhập tối đa 10 ký tự"),
    }),
  });

  return (
    <div>
      <div className="container">
        <div className="loginPage_content flex justify-center items-center">
          <div className="loginPage_img w-1/2">
            <img src={ImgLogin} alt="Image login" />
          </div>
          <div className="loginPage_form w-1/2 px-5">
            <form className="" onSubmit={handleSubmit}>
              <h1
                className="text-center"
                style={{ fontSize: "25px", fontWeight: "700" }}
              >
                ĐĂNG NHẬP
              </h1>
              <InputCustom
                classWrapper="my-3"
                contentLable={"Email"}
                placeHolder={"Nhập email của bạn"}
                name="email"
                onChange={handleChange}
                value={values.email}
                handleSubmit={handleSubmit}
                onBlur={handleBlur}
                touched={touched.email}
                error={errors.email}
                isValid={!isValid.email}
              />

              <InputCustom
                contentLable={"Mật khẩu"}
                placeHolder={"Nhập mật khẩu"}
                type="password"
                name="passWord"
                onChange={handleChange}
                value={values.passWord}
                handleSubmit={handleSubmit}
                onBlur={handleBlur}
                error={errors.passWord}
                touched={touched.passWord}
                isValid={!isValid.passWord}
              />
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full py-3 px-3 bg-green-600 text-white rounded-xl hover:bg-green-500"
                >
                  Đăng Nhập
                </button>
                <Link
                  to="dang-ky"
                  className="my-3 text-blue-800 hover:text-blue-500"
                >
                  Nhấn vào đây để đăng ký nếu bạn chưa có tài khoản.
                </Link>
                <div className="">
                  <Link className="my-3 text-blue-900 hover:text-blue-500">
                    Trở về trang chủ.
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
