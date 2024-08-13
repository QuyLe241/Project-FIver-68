import React from "react";
import { Link } from "react-router-dom";

const LinkCustom = ({ content, to, className }) => {
  return (
    <Link to={to} className={`py-2 px-5 ${className}`}>
      {content}
    </Link>
  );
};

export default LinkCustom;
