import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";
import Time from "component/tidalplaylist/Time";
import Volume from "component/tidalplaylist/Volume";

import { Chromecast } from "@styled-icons/fa-brands";
import { ArrowsOut, ArrowsIn } from "@styled-icons/foundation";
import CenterIcons from "component/tidalplaylist/CenterIcons";

const MusicBox = () => {
  return (
    <MusicInnerBox>
      <TimelineBase></TimelineBase>
      <Time />
      <PlayIconBox>
        <Volume />
        <CenterIcons />
        <RightIcons>
          <ChromecastIcon>
            <Chromecast />
          </ChromecastIcon>
          <FullscreenIcon>
            <ArrowsOut />
          </FullscreenIcon>
        </RightIcons>
      </PlayIconBox>
    </MusicInnerBox>
  );
};

const MusicInnerBox = styled.div``;
const TimelineBase = styled.div`
  border-bottom: 1px solid white;
  opacity: 0.5;
`;

const PlayIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
`;
const ChromecastIcon = styled.div`
  width: 20px;
  color: white;
`;
const FullscreenIcon = styled.div`
  width: 18px;
  margin-left: 15px;
  color: white;
`;

export default MusicBox;
