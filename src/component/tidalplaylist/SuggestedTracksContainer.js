import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";
import { MoreHorizontal } from "@styled-icons/evaicons-solid";
import { PlayListAdd } from "@styled-icons/remix-fill";
import Album from "component/tidalplaylist/Album";

const SuggestedTracksContainer = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/Data/PlayListData.json")
      .then(res => res.json())
      .then(res => setData(res.data));
  };

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <SuggestedTracks>
      <SuggestedTitle>Suggested Tracks</SuggestedTitle>
      {data.map((el, index) => {
        return (
          <SuggestedAlbum key={index}>
            <SuggestedLeft>
              <Album size="42" src={el.image} alt="suggested-album-img" />
              <SuggestedInfoBox>
                <InfoTitle>{el.title}</InfoTitle>
                <InfoSinger>{el.artist}</InfoSinger>
              </SuggestedInfoBox>
            </SuggestedLeft>
            <SuggestedRight>
              <SuggestedIcon>
                <ShowOptions>
                  <MoreHorizontal />
                </ShowOptions>
                <QueueAddBtn>
                  <PlayListAdd />
                </QueueAddBtn>
              </SuggestedIcon>
            </SuggestedRight>
          </SuggestedAlbum>
        );
      })}
    </SuggestedTracks>
  );
};

const SuggestedTracks = styled.div`
  width: 40%;
  margin-left: 100px;
`;
const SuggestedTitle = styled.div`
  margin-bottom: 30px;
  color: white;
`;
const SuggestedAlbum = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const SuggestedLeft = styled.div`
  display: flex;
`;
const SuggestedAlbumImg = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 20px;
`;
const SuggestedInfoBox = styled.div`
  margin-left: 20px;
`;
const InfoTitle = styled.div`
  color: white;
  font-size: 14px;
`;
const InfoSinger = styled.div`
  color: white;
  opacity: 0.5;
  font-size: 14px;
`;
const SuggestedRight = styled.div``;
const SuggestedIcon = styled.div`
  display: flex;
`;
const ShowOptions = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 15px;
  color: white;
  opacity: 0.5;
`;
const QueueAddBtn = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  color: white;
  opacity: 0.5;
`;

export default SuggestedTracksContainer;
