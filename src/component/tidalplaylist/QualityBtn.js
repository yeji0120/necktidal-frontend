import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

const QualityBtn = () => {
  const [normalMode, setNormalMode] = useState(true);
  return (
    <StreamingQuality onClick={() => setNormalMode(!normalMode)}>
      {normalMode ? "NORMAL" : "HIGH"}
    </StreamingQuality>
  );
};
const StreamingQuality = styled.button`
  width: 65px;
  height: 25px;
  outline: none;
  border-radius: 5px;
  color: white;
  font-family: "nationale-bold";
  text-align: center;
  background-color: rgba(45, 48, 51, 0.5);
`;
export default QualityBtn;
