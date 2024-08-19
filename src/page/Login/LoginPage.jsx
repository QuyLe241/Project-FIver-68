import React from "react";
import ImgLogin from "../../Img/LoginImg.png";

const LoginPage = () => {
  return (
    <div>
      <div className="container">
        <div className="loginPage_content">
          <div className="loginPage_img w-1/2">
            <img src={ImgLogin} alt="Image login" />
          </div>
          <div className="loginPage_form"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
