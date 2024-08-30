import React from "react";
import InputCustom from "../../components/Input/InputCustom";
import { useFormik } from "formik";
import { authService } from "../../services/auth.service";

const AdminLogin = () => {
  //      forkmil
  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    errors,
    resetForm,
    values,
  } = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    onSubmit: (values) => {
      //   console.log(values);
      authService
        .signIn(values)
        .then((res) => {
          console.log(values);
          //   Kiểm tra người dùng có là user hay admin
          if (res.data.content.role == "USER") {
            //  Thông báo người dùng không phải admin
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div>
      <div className="container">
        <div className="admmin_login h-screen flex">
          <div className="admin_login_animation w-1/2"></div>
          <div className="admin_login_form w-1/2 flex flex-col justify-center">
            <form action="" className="space-y-5" onSubmit={handleSubmit}>
              <h1
                style={{ fontSize: "28px", fontWeight: "700" }}
                className="text-center"
              >
                Trang đăng nhập cho Admin
              </h1>
              <InputCustom
                contentLable={"Email"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <InputCustom
                contentLable={"Password"}
                name={"passWord"}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passWord}
              />
              <div className="space-y-3">
                <button
                  type="submit"
                  className="mt-5 py-2 px-5 bg-green-500 rounded-lg text-white inline-block w-full"
                >
                  Đăng Nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
