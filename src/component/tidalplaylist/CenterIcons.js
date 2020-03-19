import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

import { Shuffle } from "@styled-icons/boxicons-regular";
import {
  SkipPrevious,
  Play,
  SkipNext,
  Pause
} from "@styled-icons/boxicons-regular";
import { Repeat } from "@styled-icons/remix-line";

const CenterIcons = () => {
  return (
    <Container>
      <ShuffleIcon>
        <Shuffle />
      </ShuffleIcon>
      <PreviousIcon>
        <SkipPrevious />
      </PreviousIcon>
      <PlayIcon>
        <Play />
      </PlayIcon>
      <NextIcon>
        <SkipNext />
      </NextIcon>
      <RepeatIcon>
        <Repeat />
      </RepeatIcon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const ShuffleIcon = styled.div`
  width: 25px;
  color: white;
  opacity: 0.5;
`;
const PreviousIcon = styled.div`
  width: 70px;
  margin-left: 10px;
  color: white;
`;
const PlayIcon = styled.div`
  width: 80px;
  color: white;
`;
const NextIcon = styled.div`
  width: 70px;
  margin-right: 10px;
  color: white;
`;
const RepeatIcon = styled.div`
  width: 25px;
  color: white;
  opacity: 0.5;
`;

export default CenterIcons;
