import React from 'react'
import styled, { css } from 'styled-components'

const NewAlbumBox = (props) => {
    return (
        <>
        <Wrapper>
            <ImgWrapper>
                <IMG src={props.thumbnail} alt="" />
            </ImgWrapper>
            <DetailWrapper>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
            </DetailWrapper>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 170px;
height: 230px;
margin-right: 20px;
`;
const ImgWrapper = styled.div`
width: 170px;
height: 170px;
overflow: hidden;
cursor: pointer;
`;
const IMG =styled.img`
width: 100%;
height: 100%;
`;
const DetailWrapper = styled.div`
padding-top: 8px;
height: 56px;
background-color: transparent;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
display: flex;
flex-direction: column;
`;
const Title = styled.a`
padding-top: 8px;
width: 288px;
height: 24px;
color: white;
font-size: 15px;
font-weight: 500;
cursor: pointer;
 &:hover {
     text-decoration: underline;
 }
`;

const Subtitle = styled.a`
width: 288px;
height: 24px;
color: rgba(255, 255, 255, 0.5);
font-size: 14px;
font-weight: 500;
&:hover {
     text-decoration: underline;
 }
`;

export default NewAlbumBox
