import React from "react";
import FormRegister from "../../components/FormRegister/FormRegister";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="w-1/2">
          {/* <img src="" alt="img register" /> */}
          <img src="../../../public/RegisterImg.png" alt="" />
        </div>
        <div className="w-1/2">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
