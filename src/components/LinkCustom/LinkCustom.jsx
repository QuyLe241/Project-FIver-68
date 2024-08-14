import React from "react";
import { Link } from "react-router-dom";
// import "../header/header.scss";

const LinkCustom = ({ content, to, className }) => {
  return (
    <Link to={to} className={`py-2 px-5 ${className} hover:bg-green-500`}>
      {content}
    </Link>
  );
};

export default LinkCustom;
