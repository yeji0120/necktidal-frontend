import React from "react";

export const MdIcon = ({ name, className = "", style }) => (
  <i style={style} className={`material-icons ${className}`}>
    {name}
  </i>
);
