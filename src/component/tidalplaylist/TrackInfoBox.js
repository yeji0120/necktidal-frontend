import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

const TrackInfoBox = () => {
  return (
    <TrackInfoInnerBox>
      <TrackInfo>Track Info</TrackInfo>
      <TrackInfoTable>
        <TrackLi>
          <TrackInfoTitle>
            Title
            <TrackInfoVlaue>Stargazing</TrackInfoVlaue>
          </TrackInfoTitle>
        </TrackLi>
        <TrackLi>
          <TrackInfoTitle>
            Artists
            <TrackInfoVlaue>Kygo, Justin, Jesso</TrackInfoVlaue>
          </TrackInfoTitle>
        </TrackLi>
        <TrackLi>
          <TrackInfoTitle>
            Album
            <TrackInfoVlaue>Stargazing - EP</TrackInfoVlaue>
          </TrackInfoTitle>
        </TrackLi>
        <TrackLi>
          <TrackInfoTitle>
            Released
            <TrackInfoVlaue>09/21/2017</TrackInfoVlaue>
          </TrackInfoTitle>
        </TrackLi>
        <TrackLi>
          <TrackInfoTitle>
            Label
            <TrackInfoVlaue>
              (P) 2017 Kygo AS under exclusive license to Sony Music
            </TrackInfoVlaue>
            <br />
            <TrackInfoVlaue>
              Entertainment International Ltd / Ultra Records, LLC
            </TrackInfoVlaue>
          </TrackInfoTitle>
        </TrackLi>
      </TrackInfoTable>
    </TrackInfoInnerBox>
  );
};

const TrackInfoInnerBox = styled.div`
  margin-top: 30px;
`;
const TrackInfo = styled.div`
  color: white;
  font-size: 15px;
  font-family: "nationale-bold";
`;
const TrackInfoTable = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 30px;
  color: white;
  font-size: 14px;
  font-family: "natinale-regular";
`;
const TrackLi = styled.li``;
const TrackInfoTitle = styled.ul`
  list-style: none;
  padding-top: 15px;
  padding-bottom: 30px;
  border-bottom: 1px solid white;
  border-color: gray;
`;
const TrackInfoVlaue = styled.li`
  float: right;
  color: white;
  opacity: 0.5;
`;

export default TrackInfoBox;
