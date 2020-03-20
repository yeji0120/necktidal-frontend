import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import GlobalStyles from "component/GlobalStyles";
import {HURL} from "config.js";
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
  const [trackData, setTrackData] = useState([]);

  const [url, setUrl] = useState(
  'https://resources.tidal.com/images/d4e294c4/975b/444e/b2d7/d0b2eeb0a607/320x320.jpg')
    ;
  const getTrackData = () => {
    fetch(`${HURL}/music/artist/86/toptrack`)
    // fetch("http://localhost:3000/Data/Track.json")
      .then(res => res.json())
      .then(res => setTrackData(res.tracks));
  };

  const [albumData, setAlbumData] = useState([]);
  const getAlbumData = () => {
    fetch(`${HURL}/music/artist/86`)
    // fetch("http://localhost:3000/Data/Artist.json")
      .then(res => res.json())
      .then(res => setAlbumData(res.artist));
  };

  const StreamingChange = index => {
    console.log("StreamingChange!!");
  };

  useEffect(() => {
    getTrackData();
  }, []);
  // console.log("TrackData ::: ", trackData);

  return (
    <div style={{ position: "relative" }}>
      <Container {...props}>
        <PlaylistHeaderContainer />
        <PlaylistMainContainer {...props}>
          <GlobalStyles />
          <BackgroundCover
            {...props}
            src={url}
            // src={index.thumbnail_url}
            alt="background-cover"
          />
          <PlaylistContainer>
            <MainAlbumBox>
              <Inner>
                <Album size="488" src={url} />
              </Inner>
              <MiniInfoBox trackData={trackData} />
              <AudioPlayer />
              {/* <MusicBox /> */}
              <TrackInfoBox />
              <CreditsBox />
              <BioBox />
            </MainAlbumBox>
            <SuggestedTracksContainer
              trackData={trackData}
              StreamingChange={StreamingChange}
              setUrl={setUrl}
            />
          </PlaylistContainer>
        </PlaylistMainContainer>
      </Container>
    </div>
  );
};

const OpenPlaylist = keyframes`
0%{
  top: 100vh;
  position:absolute;
}
90%{
  top: 0vh;
}
100%{
  position:fixed;
}
`;
const Container = styled.div`
  overflow: hidden;
  position: fixed;
  /* top: 100vh; */
  top: ${props => (props.sizeUp ? "0vh" : "100vh")};
  /* margin-bottom: 84px; */
  transition: top 0.2s linear;
  animation: ${props => (props.sizeUp ? "OpenPlaylist 1s ease-in" : "none")};
  animation-fill-mode: both;
  z-index: 10000;
`;
const PlaylistMainContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  top: 100vh;

  margin-bottom: 84px;
  /* height: ${props => (props.sizeUp ? "100%" : "0vh")}; */
  /* display: ${props => (props.sizeUp ? "none" : "block")}; */
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
  z-index: -3;
  background-size: cover;
  filter: blur(25px) brightness(25%);
  transform: scale(1.1);
  animation-fill-mode: both;
`;
const PlaylistContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 130px 130px 0px 130px;
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
