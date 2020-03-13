import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

import Album from "component/tidalplaylist/Album";
import IconInnerBox from "component/tidalplaylist/IconInnerBox";
import CenterIcons from "component/tidalplaylist/CenterIcons";
import QualityBtn from "component/tidalplaylist/QualityBtn";
import Time from "component/tidalplaylist/Time";
import Volume from "component/tidalplaylist/Volume";
import AudioPlayer from "component/audioPlayer";
import { Slider } from "component/audioPlayer";
import Tidalplaylist from "component/tidalplaylist/Tidalplaylist";

import { Expand } from "@styled-icons/evaicons-solid";

const TidalPlayBar = () => {
  const [sizeUp, setSizeUp] = useState(false);
  console.log(sizeUp);

  return (
    <div style={{ width: "100vw" }}>
      <PlayBarContainer>
        <BarLeftBox>
          <PlayBarAlbumBox>
            <AlbumHoverBox>
              <SizeupBtn onClick={() => setSizeUp(!sizeUp)}>
                <SizeupIcon />
              </SizeupBtn>
              <Album size="60" />
            </AlbumHoverBox>
            <MainInfo>
              <MiniInfoTitle>Stargazing</MiniInfoTitle>
              <MiniInfoArtist>Kygo, Justin, Jesso</MiniInfoArtist>
              <PlayingFrom>Playing from: My Tracks</PlayingFrom>
            </MainInfo>
            <IconInnerBox />
          </PlayBarAlbumBox>
        </BarLeftBox>

        <BarCenterBox>
          <AudioPlayer />
        </BarCenterBox>

        <BarRightBox>
          {/* <CenterIconsBox>
            <CenterIcons />
          </CenterIconsBox> */}
          <QualityBtn />
          <Time />
          <Volume />
        </BarRightBox>
      </PlayBarContainer>
      <Tidalplaylist sizeUp={sizeUp} />
    </div>
  );
};

const PlayBarContainer = styled.div`
  width: 100vw;
  height: 96px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: #020709;
`;
const BarLeftBox = styled.div`
  width: 33%;
`;
const PlayBarAlbumBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AlbumHoverBox = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  &:hover {
    filter: brightness(50%);
  }
`;
const SizeupBtn = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 17px;
  left: 16px;
  display: none;
  ${AlbumHoverBox}:hover & {
    display: block;
  }
`;
const SizeupIcon = styled(Expand)`
  width: 30px;
  height: 30px;
  color: white;
`;

const MainInfo = styled.div`
  line-height: 25px;
`;
const MiniInfoTitle = styled.div`
  color: white;
  font-size: 14px;
  font-family: "nationale-regular";
`;
const MiniInfoArtist = styled.div`
  color: white;
  opacity: 0.5;
  font-size: 14px;
  font-family: "nationale-regular";
`;
const PlayingFrom = styled.div`
  color: white;
  opacity: 0.5;
  font-size: 15px;
  font-family: "nationale-regular";
`;
const BarCenterBox = styled.div`
  width: 33%;
`;
const BarRightBox = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;
const CenterIconsBox = styled.div`
  width: 472px;
`;

export default TidalPlayBar;
