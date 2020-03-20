import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { HURL } from "config";
import styled from 'styled-components'
import {Heart} from '@styled-icons/boxicons-solid/Heart'
import {MoreHorizontalOutline} from '@styled-icons/evaicons-outline/MoreHorizontalOutline'
import {ControllerPlay} from '@styled-icons/entypo/ControllerPlay'

const NewAlbumBox = (props) => {
    let history = useHistory();
    const[isDisplayed,setIsDisplayed] = useState(false)
    const[isHeart, setHeart] = useState(false)

    const IsEntered = () => {
        setIsDisplayed(!isDisplayed);
    }
    const IsLeaved = () => {
        setIsDisplayed(!isDisplayed);
    }
   
    // let token = localStorage.getItem("token")
    // 토큰 자리에 token이라고 적으면 됨.
    const IsClickedHeart = () => {
        fetch(`${HURL}/account/collection?category=album`,{
            method:'POST',
            headers:{
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFhYUBuLmNvbSJ9.IFMAeiy2OMHXrn7URVhSa8_AwbcHu14fPljCeks75GA'
            },
            body: JSON.stringify({
                album_id: props.id    
            })
        })

        setHeart(!isHeart);
    }

        
    return (
        <>
        <Wrapper>
            <ImgWrapper onMouseOver={IsEntered} onMouseOut={IsLeaved}>
                <IMG src={props.thumbnail} alt="" />
                <DIV isActive={isDisplayed} >
                <Icons>
                    <MoreIcon />
                    <Playbtn onClick={ () => history.push("/playlist")} >
                    <PlayIcon />
                    </Playbtn>
                    <HeartIcon onClick={IsClickedHeart} ColoredHeart={isHeart}/>
                </Icons>
            </DIV>
            </ImgWrapper>
           
            <DetailWrapper>
                <Title>{props.title}</Title>
                <Subtitle> {props.subtitle}</Subtitle>
            </DetailWrapper>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 170px;
height: 230px;
margin-right: 20px;
position: relative;
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
const DIV = styled.div`
width: 170px;
height: 170px;
background: black;
opacity: 0.7;
position: absolute;
top: 0;
left: 0;
cursor: pointer;
display: ${props => props.isActive ? "block" : "none"};
`;
const Icons = styled.div`
position: relative;
top: 70px;
left: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: white;
`;
const MoreIcon = styled(MoreHorizontalOutline)`
width: 30px;
height: auto;
 &:hover{
     color:gray;
 }
`;
const Playbtn = styled.div``;
const PlayIcon = styled(ControllerPlay)`
width: 30px;
margin: 0 9px;
height: auto;
&:hover{
     color:gray;
 }
`;
const HeartIcon = styled(Heart)`
width: 26px;
height: auto;
/* &:hover{
     fill: gray;
 } */
color: ${props => props.ColoredHeart ? "red" : "white"};

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
font-size: 14px;
font-weight: 500;
cursor: pointer;
 &:hover {
     text-decoration: underline;
 }
`;

const Subtitle = styled.a`
width: 288px;
height: 24px;
padding-top: 6px;
color: rgba(255, 255, 255, 0.5);
font-size: 13px;
font-weight: 500;
&:hover {
     text-decoration: underline;
 }
`;

export default NewAlbumBox;
