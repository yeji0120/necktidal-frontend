import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";
import { MoreHorizontal } from "@styled-icons/evaicons-solid";
import { PlayListAdd } from "@styled-icons/remix-fill";
import Album from "component/tidalplaylist/Album";

const SuggestedTracksContainer = props => {
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <SuggestedTracks>
      <SuggestedTitle>Suggested Tracks</SuggestedTitle>
      {props.trackData.map((el, index) => {
        console.log("URLURL!", el.album_info[0].thumbnail_url);
        return (
          <HoverBox
            onClick={() => {
              console.log("CHANGE!!");
              props.setUrl(el.album_info[0].thumbnail_url);
            }}
          >
            <SuggestedAlbum key={index}>
              <SuggestedLeft>
                <Album
                  size="42"
                  src={el.album_info[0].thumbnail_url}
                  alt="suggested-album-img"
                />
                <SuggestedInfoBox>
                  <InfoTitle>{el.album_info[0].name}</InfoTitle>
                  <InfoSinger>{el.artist_info[0].name}</InfoSinger>
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
          </HoverBox>
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
const HoverBox = styled.div`
  &:hover {
    width: 100%;
    background-color: gray;
    opacity: 0.5;
    border-radius: 10px;
  }
`;
const SuggestedAlbum = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0px;
`;
const SuggestedLeft = styled.div`
  display: flex;
`;
const SuggestedAlbumImg = styled.img`
  width: 42px;
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
  margin-left: 15px;
  color: white;
  opacity: 0.5;
`;
const QueueAddBtn = styled.div`
  width: 24px;
  margin-left: 10px;
  color: white;
  opacity: 0.5;
`;

export default SuggestedTracksContainer;
