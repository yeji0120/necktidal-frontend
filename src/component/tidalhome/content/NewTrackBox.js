import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {HURL, YURL} from 'config';
import {showModalAction} from 'store/Actions/index'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Heart} from '@styled-icons/boxicons-solid/Heart'
import {ControllerPlay} from '@styled-icons/entypo/ControllerPlay'
import {Plus} from '@styled-icons/evaicons-solid/Plus'
import {MoreHorizontalOutline} from '@styled-icons/evaicons-outline/MoreHorizontalOutline'

const NewTrackBox = (props) => {
    let history = useHistory();
    const[isDisplayed,setIsDisplayed] = useState(false)
    const[isHeart, setHeart] = useState(false)

    const IsEntered = () => {
        setIsDisplayed(!isDisplayed);
    }
    const IsLeaved = () => {
        setIsDisplayed(!isDisplayed);
    }
    const IsClickedHeart = () => {
        //heart에 fetch 붙여야함 newalbumbox 참고
        setHeart(!isHeart);
    }
    const IsClickedPlay =() => {
       props.showModalAction();
    }
    return (
        <>
        <Wrapper onMouseOver={IsEntered} onMouseOut={IsLeaved}>
            <ImgContainer>
                <IMG src={props.thumbnail} alt=""/>
            </ImgContainer>
            <Title>{props.title}</Title>
            <Artist>{props.artist}</Artist>
            <Album>{props.album}</Album>
            <Time>{props.time}</Time>
            <Icons>
            </Icons>
            <DIV isActive={isDisplayed}>
                <IconDiv>
                    <PlayIcon onClick={IsClickedPlay}/>
                    <RightIcon>
                        <MoreIcon />
                        <PlusIcon />
                        <HeartIcon onClick={IsClickedHeart} ColoredHeart={isHeart}/>
                    </RightIcon>
                </IconDiv>
            </DIV>
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
position: relative;
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
width: 45%;
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
width: 35%;
display: flex;
align-items: center;
padding-left: 10px;
&:hover{
        text-decoration: underline;
    }
`;
const Time = styled.div`
width: 10%;
display: flex;
align-items: center;
padding-left: 10px;
`;
const Icons = styled.div`
padding-left: 30px;
width: 180px;
display: flex;
align-items: center;
`;

const DIV = styled.div`
width: 100%;
height: 48px;
background: black;
opacity: 0.6;
position: absolute;
top: 0;
left: 0;
cursor: pointer;
display: ${props => props.isActive ? "block" : "none"};
`;
const IconDiv = styled.div`
margin-top: 7px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const PlayIcon = styled(ControllerPlay)`
margin-left: 5px;
width: 30px;
height: auto;
&:hover{
     color:gray;
 }
`;
const RightIcon = styled.div`
padding-right: 54px;
display: flex;
`;
const MoreIcon = styled(MoreHorizontalOutline)`
width: 20px;
height: auto;
color: white;
margin: 7px;
`;
const PlusIcon = styled(Plus)`
width:18px;
margin-right: 7px;
height: auto;
color: white;
`;
const HeartIcon = styled(Heart)`
width:18px;
height: auto;
color: ${props => props.ColoredHeart ? "red" : "white"};
`;

const mapStateToProps = state => {
    return {showModal: state.showModal};
}
export default connect(mapStateToProps, {showModalAction}) (NewTrackBox)
