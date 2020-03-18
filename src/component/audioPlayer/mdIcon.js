import React from "react";

export const MdIcon = ({ name, className = "", style }) => (
  <i style={style} className={`material-icons ${className}`}>
    {name}
  </i>
);

// export const Icons = ({ name, className = "", style }) => {
//   <i style={style} className={`styled-icons ${className}`}>
//     {name}
//   </i>;
// };
