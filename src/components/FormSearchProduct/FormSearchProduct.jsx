import React from "react";
import useResponsive from "../../hooks/UseResponsive";
import Banner from "../Banner/Banner";
import InputCustom from "../Input/InputCustom";
import IconSearch from "../../icon/IconSearch";

const FormSearchProduct = () => {
  const isResponsive = useResponsive({
    mobie: 576,
    tablet: 992,
  });
  //   console.log(isResponsive);
  //   return isResponsive.mobie ? <Banner /> : <InputCustom />;

  //          iconsets
  //      https://icon-sets.iconify.design/
  return (
    <div className="">
      <form action="">
        <div className="">
          <input type="text" placeholder="Nhập vào công việc bạn muốn tìm" />
          <button type="submit" className="">
            <IconSearch size={30} color={"black"} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSearchProduct;
