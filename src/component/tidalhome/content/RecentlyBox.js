import React from 'react'
import styled, { css } from 'styled-components'

const RecentlyBox = () => {
    return (
        <>
        <Wrapper>
            <ImgWrapper>
                <IMG src="https://resources.tidal.com/images/78fbd933/ad59/4802/866e/adc4504a8076/480x480.jpg" alt="" />
            </ImgWrapper>
            <DetailWrapper>
                <Title>Ah-Ah-AH</Title>
                <Subtitle>aftershool</Subtitle>
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
export default RecentlyBox
