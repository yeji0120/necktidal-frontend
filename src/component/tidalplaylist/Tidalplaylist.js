import React from "react";
import styled, { keyframes } from "styled-components";
import GlobalStyles from "component/GlobalStyles";

import PlaylistHeaderContainer from "component/tidalplaylist/PlaylistHeader";
import Album from "component/tidalplaylist/Album";
import MiniInfoBox from "component/tidalplaylist/MiniInfoBox";
import AudioPlayer from "component/audioPlayer";
import MusicBox from "component/tidalplaylist/MusicBox";
import TrackInfoBox from "component/tidalplaylist/TrackInfoBox";
import CreditsBox from "component/tidalplaylist/CreditsBox";
import BioBox from "component/tidalplaylist/BioBox";
import SuggestedTracksContainer from "component/tidalplaylist/SuggestedTracksContainer";

const Tidalplaylist = props => {
  return (
    <PlaylistMainContainer {...props}>
      <PlaylistHeaderContainer />
      <GlobalStyles />
      <BackgroundCover
        src="https://resources.tidal.com/images/7d7e4ce5/76c1/4e28/a49c/2bbf59b725ee/320x320.jpg"
        alt="background-cover"
      />
      <PlaylistContainer>
        <MainAlbumBox>
          <Inner>
            <Album size="488" />
          </Inner>
          <MiniInfoBox />
          <AudioPlayer />
          {/* <MusicBox /> */}
          <TrackInfoBox />
          <CreditsBox />
          <BioBox />
        </MainAlbumBox>
        <SuggestedTracksContainer />
      </PlaylistContainer>
    </PlaylistMainContainer>
  );
};

// const OpenPlaylist = keyframes`
// from{
//   height: 0vh;
// }
// to{
//   height: 100vh;
// }
// `;

const PlaylistMainContainer = styled.div`
  /* position: relative; */
  overflow-x: hidden;
  /* overflow-y: scroll; */
  position: absolute;
  bottom: 0;
  /* height: ${props => (props.sizeUp ? "100%" : "0vh")}; */
  /* display: ${props => (props.sizeUp ? "none" : "block")}; */
  top: ${props => (props.sizeUp ? "0vh" : "100vh")};
  transition: top 0.5s linear;
  /* background-image: url("https://resources.tidal.com/images/7d7e4ce5/76c1/4e28/a49c/2bbf59b725ee/320x320.jpg");
  background-size: cover; */
  /* backdrop-filter: blur(25px) brightness(25%); */
  /* transform: scale(1.1); */
`;
const BackgroundCover = styled.img`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
  background-size: cover;
  filter: blur(25px) brightness(25%);
  transform: scale(1.1);
`;
const PlaylistContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 130px 130px 0px 130px;
  /* overflow: scroll;
  height: 100vh;
  overflow-y: scroll; */
`;
const MainAlbumBox = styled.div`
  width: 60%;
  justify-content: center;
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export default Tidalplaylist;
