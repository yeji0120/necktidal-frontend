import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

const Album = props => {
  return (
    <Container {...props}>
      <AlbumImgBox>
        <MainAlbumImg src={props.src} alt="main-album-img" />
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
