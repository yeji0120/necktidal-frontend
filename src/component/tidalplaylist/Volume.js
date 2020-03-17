import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

import { Volume1, Volume2, VolumeX } from "@styled-icons/feather";

const Volume = () => {
  return (
    <Container>
      <VolumeIcon>
        <Volume1 />
      </VolumeIcon>
      <VolumeBar></VolumeBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const VolumeIcon = styled.div`
  width: 30px;
  color: white;
`;
const VolumeBar = styled.div`
  width: 130px;
  margin-left: 15px;
  border: 1px solid white;
  opacity: 0.5;
`;

export default Volume;
