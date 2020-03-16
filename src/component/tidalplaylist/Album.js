import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

const Album = props => {
  return (
    <Container {...props}>
      <AlbumImgBox>
        <MainAlbumImg
          src="https://resources.tidal.com/images/7d7e4ce5/76c1/4e28/a49c/2bbf59b725ee/320x320.jpg"
          alt="main-album-img"
        />
      </AlbumImgBox>
    </Container>
  );
};

const Container = styled.div`
  width: ${props => props.size}px;
`;
const AlbumImgBox = styled.div`
  text-align: center;
`;
const MainAlbumImg = styled.img`
  width: 100%;
`;
export default Album;
