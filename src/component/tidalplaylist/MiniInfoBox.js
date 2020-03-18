import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";
import { MoreHorizontal } from "@styled-icons/evaicons-solid";
import { Heart } from "@styled-icons/boxicons-solid";
import { BackInTime } from "styled-icons/entypo";
import { BackgroundColor } from "styled-icons/foundation";
import QualityBtn from "component/tidalplaylist/QualityBtn";
import IconInnerBox from "component/tidalplaylist/IconInnerBox";

const MiniInfoBox = props => {
  console.log("PROPS ::: ", props.artist_info);
  return (
    <MiniInfoInnerBox>
      <MainInfo>
        <MiniInfoTitle>OMG</MiniInfoTitle>
        <MiniInfoArtist>Gryffin, Carly Rea Jepsen</MiniInfoArtist>
        <PlayingFrom>Playing from: My Tracks</PlayingFrom>
      </MainInfo>
      <InfoIconBox>
        <QualityBtn />
        <IconInnerBox />
      </InfoIconBox>
    </MiniInfoInnerBox>
  );
};

const MiniInfoInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
const InfoIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export default MiniInfoBox;
