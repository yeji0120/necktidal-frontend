import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

import Album from "component/tidalplaylist/Album";
import IconInnerBox from "component/tidalplaylist/IconInnerBox";
import QualityBtn from "component/tidalplaylist/QualityBtn";
import AudioPlayer from "component/audioPlayer";
import Tidalplaylist from "component/tidalplaylist/Tidalplaylist";

import { Expand } from "@styled-icons/evaicons-solid";

const TidalPlayBar = props => {
  const [sizeUp, setSizeUp] = useState(false);
  console.log("sizeUp", sizeUp);

  return (
    <div style={{ position: "relative" }}>
      <Container>
        <PlayBarContainer>
          <LeftBox>
            <AlbumHoverBox>
              <SizeupBtn onClick={() => setSizeUp(!sizeUp)}>
                <SizeupIcon />
              </SizeupBtn>
              <Album
                size="60"
                src={'https://resources.tidal.com/images/d4e294c4/975b/444e/b2d7/d0b2eeb0a607/320x320.jpg'}
              />
            </AlbumHoverBox>
            <MainInfo>
              <MiniInfoTitle>Love Me Now</MiniInfoTitle>
              <MiniInfoArtist>Phantagram</MiniInfoArtist>
              <PlayingFrom>Playing from: My Tracks</PlayingFrom>
            </MainInfo>
            <div style={{ margin: "0px 20px" }}>
              <IconInnerBox />
            </div>
            <div>
              <QualityBtn />
            </div>
          </LeftBox>
          <RightBox>
            <div style={{ width: "800px" }}>
              <AudioPlayer />
            </div>
          </RightBox>
        </PlayBarContainer>
        <Tidalplaylist sizeUp={sizeUp} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100vw;
`;
const PlayBarContainer = styled.div`
  width: 100vw;
  height: 96px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: #020709;
`;
const LeftBox = styled.div`
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
  margin-left: 20px;
  line-height: 20px;
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

// const IconInnerBox = styled.div`
//   margin: 0px 20px;
// `;
const RightBox = styled.div``;

export default TidalPlayBar;
