import React from "react";
import FormRegister from "../../components/FormRegister/FormRegister";
import ImgRegis from "../../Img/RegisterImg1.png";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="w-1/2">
          <img src={ImgRegis} alt="img register" />
          {/* <img src="../../../public/RegisterImg.png" alt="" /> */}
          {/* <img src="./src/Img/RegisterImg1.png" alt="" /> */}
        </div>
        <div className="w-1/2">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
