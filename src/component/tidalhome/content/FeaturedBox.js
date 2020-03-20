import React from 'react'
import styled from 'styled-components'

const FeaturedBox = (props) => {
    return (
        <>
        <Wrapper>
            <ImgWrapper>
                <BackgroundImg src={props.img} alt="" />
                    <IMGContainer src={props.img} alt="">
                    </IMGContainer>
            </ImgWrapper>
            <DetailWrapper>
                <DetailImg src={props.img} alt="" />
                <DetailText>
                    <Headers>{props.head}</Headers>
                    <Title>{props.title}</Title>
                    <Subtitle>{props.subtitle}</Subtitle>
                </DetailText>
            </DetailWrapper>
        </Wrapper>
        </>
    )
}
const Wrapper = styled.div`
margin-right: 20px;
cursor: pointer;
`;
const ImgWrapper = styled.div`
width: 320px;
height: 250px;
padding-bottom: 25px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;
const BackgroundImg = styled.img`
width: 100%;
height: 100%;
position: absolute;
filter: blur(20px) brightness(90%);`;

const IMGContainer = styled.img`
margin-top: 20px; 
width: 180px;
height: 180px;
position: relative;
transform: scale(1); 
-webkit-transform: scale(1);
-moz-transform: scale(1);
transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
    }
`;

// ---------Detail---------------
const DetailWrapper = styled.div`
width: 320px;
height: 104px;
box-sizing: border-box;
overflow: hidden;
position: relative;
`;

const DetailImg = styled.img`
width: 320px;
height: 104px;
filter: blur(50px) brightness(110%);
position: absolute;
`;

const DetailText = styled.div`
padding: 16px 16px 18px;
margin: 0 auto;
text-align: left;
position: relative;
line-height: calc(24*calc(1rem/14));
`;

const Headers = styled.div`
width: 288px;
height: 24px;
color: rgb(0, 255, 255);
text-transform: uppercase;
font-size: 12px;
font-weight: 800;
`;

const Title = styled.h2`
width: 288px;
height: 24px;
color: white;
font-size: 18px;
font-weight: 700;
text-overflow: ellipsis;
`;

const Subtitle = styled.div`
width: 288px;
height: 24px;
color: rgba(255, 255, 255, 0.5);
font-size: 16px;
font-weight: 500;
overflow: hidden;
text-overflow: ellipsis;
`;
export default FeaturedBox
