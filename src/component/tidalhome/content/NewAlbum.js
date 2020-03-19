import React, { useState, useEffect } from 'react';
import { HURL } from "config";
import { useHistory } from "react-router-dom";
import NewAlbumBox from 'component/tidalhome/content/NewAlbumBox'
import styled from 'styled-components'

const NewAlbum = () => {
    let history = useHistory();
    const [data,setData] = useState([]);
    const [isClicked,setIsClicked] = useState(0);

    useEffect(()=>{
        fetch(`${HURL}/music/album/new?limit=16&days=16`,
        // fetch("http://localhost:3000/Data/NewAlbumData.json",
        {method: "GET"
    })
        .then(res => res.json())
        .then(res => setData(res.albums))
        // .then(res => console.log(res))
    }, [])

    const moveRight = () => {
        console.log('setIsClicked', setIsClicked);
        if(isClicked<=-1801) {
          return;
        } else {
          setIsClicked(isClicked - 300)
        }
      }
    
      const moveLeft = () => {
        if(isClicked===0) {
          return;
        } else {
        setIsClicked(isClicked + 300)
      }
    }


    return (
        <>
        <Wrapper>
            <Header>
                    <Title>Suggested New Albums</Title>
                    <ViewAll onClick={ () => history.push("/viewall")}>View all</ViewAll>
            </Header>
            <ListContainer>
            <LeftBtn>
                <LeftSvg onClick={()=>moveLeft()}>
                    <Path d="M 28.8989 24 L 19.1161 14.2172 L 20.8839 12.4494 L 32.4344 24 L 20.8839 35.5505 L 19.1161 33.7827 L 28.8989 24 Z" />
                    </LeftSvg>
                </LeftBtn>
                <RightBtn>
                    <RightSvg onClick={()=>moveRight()}>
                        <Path d="M 28.8989 24 L 19.1161 14.2172 L 20.8839 12.4494 L 32.4344 24 L 20.8839 35.5505 L 19.1161 33.7827 L 28.8989 24 Z" />
                    </RightSvg>
                </RightBtn>
                <ItemContainer>
                    <DIV isMoved={isClicked}>
                    {data.map(item => {
                        return (
                            <NewAlbumBox 
                            id={item.id}
                            title={item.name}
                            subtitle={item.artist[0].name}
                            thumbnail={item.thumbnail_url}
                            />
                        )
                    })}   
                    </DIV>
                </ItemContainer>
            </ListContainer>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 100%;
height: 350px;
padding-top: 10px;
padding-bottom: 30px;
background-color: black;
overflow: hidden;
`;
const Header = styled.div`
height: 40px;
margin: 0 28px;
display: flex;
justify-content: space-between;
`;
const Title = styled.div`
margin-bottom: 11px;
height: 24px;
color: white;
font-size: 15px;
font-weight: 500;
`;
const ViewAll = styled.a`
margin-bottom: 11px;
height: 24px;
color: rgba(229, 238, 255, 0.6);
font-size: 14px;
cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;
const ListContainer = styled.div`
position: relative;
height:280px;
overflow: hidden;
`;
const LeftBtn = styled.div`
position: absolute;
width: 40px;
height: 170px;
top: 0;
left: 0;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
`;
const LeftSvg = styled.svg`
height: 40px;
transform: rotate(180deg);
fill: white;
cursor: pointer;
display: block;
`;
const RightBtn = styled.div`
position: absolute;
width: 40px;
height: 170px;
top: 0;
right: 0;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
`;
const RightSvg = styled.svg`
fill:white;
height:40px;
cursor: pointer;
`;
const Path = styled.path``;
const ItemContainer = styled.div`
height: 280px;
margin-left: 30px;
`;
const DIV = styled.div`
position:absolute;
transform: translateX(${props=> props.isMoved}px);
transition: 1s;
display: flex;
height: 280px;
`;

export default NewAlbum

