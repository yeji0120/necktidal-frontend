import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

const Time = () => {
  return (
    <Container>
      <StartTime>0:00 /</StartTime>
      <EndTime>3:56</EndTime>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 20px 0px;
`;
const StartTime = styled.div`
  color: white;
  opacity: 0.5;
  font-size: 14px;
  font-family: "nationale-regular";
`;
const EndTime = styled.div`
  color: white;
  font-size: 14px;
  font-family: "nationale-regular";
`;

export default Time;
