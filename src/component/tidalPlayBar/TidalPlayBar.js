import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";
import IconInnerBox from "component/tidalplaylist/IconInnerBox";
import QualityBtn from "component/tidalplaylist/QualityBtn";
import AudioPlayer from "component/audioPlayer";
import Tidalplaylist from "component/tidalplaylist/Tidalplaylist";
import { connect } from "react-redux";
import { HURL } from "config";
import { ShowModalAction } from "store/Actions/index";

import { Expand } from "@styled-icons/evaicons-solid";

const TidalPlayBar = props => {
  const [sizeUp, setSizeUp] = useState(false);

  console.log("sizeUp", sizeUp);

  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("props.PlayId", props.PlayId);
    // fetch(`http://10.58.3.53:8002/music/track/${props.PlayId}`)
    fetch("http://localhost:3000/Data/Track.json")
      .then(res => res.json())
      // .then(res => console.log("res : ", res));
      .then(res => setData(res.track));
  });

  useEffect(() => {
    console.log("clicked");
  }, [data]);

  // useEffect(
  //   (state, props) => {
  //     return {
  //       ShowModal: state.ShowModal
  //     };
  //     props.ShowModalAction();
  //   },
  //   [data]
  // );

  // const CheckModal = (state, props) => {
  //   if (props.PlayId) {
  //     return { ShowModal: state.ShowModal };
  //   }
  // };
  // props.ShowModalAction();

  return (
    <div style={{ position: "relative" }}>
      <Container>
        <PlayBarContainer>
          <LeftBox>
            <AlbumHoverBox>
              <SizeupBtn onClick={() => setSizeUp(true)}>
                <SizeupIcon />
              </SizeupBtn>
<<<<<<< HEAD
              <AlbumImg src={data.album_info[0].thumbnail_url} alt="AlbumImg" />
            </AlbumHoverBox>
            <MainInfo>
              <MiniInfoTitle>{data.name}</MiniInfoTitle>
              <MiniInfoArtist>{data.artist_info[0].name}</MiniInfoArtist>
=======
              <Album
                size="60"
                src={'https://resources.tidal.com/images/d4e294c4/975b/444e/b2d7/d0b2eeb0a607/320x320.jpg'}
              />
            </AlbumHoverBox>
            <MainInfo>
              <MiniInfoTitle>Love Me Now</MiniInfoTitle>
              <MiniInfoArtist>Phantagram</MiniInfoArtist>
>>>>>>> a69a044ce24f0fb501be996c38d29c16e3d97e50
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

const mapStateToProps = state => {
  return { ShowModal: state.ShowModal, PlayId: state.PlayId };
};

export default connect(mapStateToProps, { ShowModalAction, TidalPlayBar })(
  TidalPlayBar
);

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
const AlbumImg = styled.img`
  width: 60px;
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
