import React from 'react'
import styled, { css } from 'styled-components'

const NewTrackBox = (props) => {
    return (
        <>
        <Wrapper>
            <ImgContainer>
                <IMG src={props.thumbnail} alt=""/>
            </ImgContainer>
            <Title>{props.title}</Title>
            <Artist>{props.artist}</Artist>
            <Album>{props.album}</Album>
            <Time>{props.time}</Time>
            <Icons>
                <Btn>
                    <MoreIcon>
                        <Circle />
                        <Circle />
                        <Circle />  
                    </MoreIcon>
                </Btn>   
                <Btn>
                    <Svg>
                        <Path d="M 18 11.3 L 12.8 11.3 L 12.8 6 L 11.3 6 L 11.3 11.3 L 6 11.3 L 6 12.8 L 11.3 12.8 L 11.3 18 L 12.8 18 L 12.8 12.8 L 18 12.8 L 18 11.3 Z" />
                    </Svg>
                </Btn>
                <Btn>
                    <Svg>
                        <Path d="M 12 18.71 L 5.69 12.48 a 4.38 4.38 0 0 1 0 -6 a 4 4 0 0 1 6.11 0.35 l 0.2 0.26 l 0.2 -0.26 A 4.06 4.06 0 0 1 13 6 a 4.08 4.08 0 0 1 5.33 0.45 a 4.38 4.38 0 0 1 0 6 Z M 6.77 11.44 L 12 16.6 l 5.22 -5.17 a 2.86 2.86 0 0 0 0 -3.91 a 2.55 2.55 0 0 0 -3.34 -0.29 a 2.63 2.63 0 0 0 -0.49 0.52 L 12 9.57 l -1.4 -1.82 a 2.61 2.61 0 0 0 -0.49 -0.52 a 2.55 2.55 0 0 0 -3.34 0.29 A 2.86 2.86 0 0 0 6.77 11.44 Z"/>
                    </Svg>
                </Btn>
            </Icons>
        </Wrapper>
        </>
    )
}
const Wrapper = styled.div`
width: 100%;
height: 48px;
display: flex;
color: white;
font-size: 13px;
font-weight: 500;
margin-bottom: 2px;
`;
const ImgContainer = styled.div`
width: 54px;
display: flex;
align-items: center;
justify-content: center;
`;
const IMG = styled.img`
width:100%;
`;
const Title = styled.div`
width: 40%;
display: flex;
align-items: center;
padding-left: 20px;
`;
const Artist = styled.a`
width: 35%;
display: flex;
align-items: center;
padding-left: 10px;
&:hover{
        text-decoration: underline;
    }
`;
const Album = styled.a`
width: 25%;
display: flex;
align-items: center;
padding-left: 10px;
&:hover{
        text-decoration: underline;
    }
`;
const Time = styled.div`
width: 77px;
display: flex;
align-items: center;
padding-left: 10px;
`;
const Icons = styled.div`
width: 180px;
display: flex;
align-items: center;
`;
const MoreIcon = styled.div`
position: relative;
width: 24px;
height: 24px;
display: flex;
justify-content: center;
align-items: center;
`;
const Circle = styled.circle`
background-color: rgba(229, 238, 255, 0.6);
width: 3px;
height: 3px;
border-radius: 50%;
margin-left: 2px;
`;
const Btn = styled.button`
width:24px;
height: 24px;
border: none;
background-color: transparent;
&:focus {
    display: none;
}
`;
const Svg = styled.svg`
width:24px;
height: 24px;
`;
const Path = styled.path`
width:24px;
height: 24px;
/* fill-rule: evenodd; */
fill: rgba(229, 238, 255, 0.6);
`;
export default NewTrackBox
