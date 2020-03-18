import React, { useState, useEffect } from 'react'
import { HURL } from "config";
import FeaturedBox from 'component/tidalhome/content/FeaturedBox'
import styled from 'styled-components'


const Featured = () => {
  const [data,setData] = useState([]);
  const [isClicked,setIsClicked] = useState(0);

  useEffect(()=>{
    fetch(`${HURL}/music/album/top-rank?limit=16`,
    {method: "GET" 
})
    .then(res => res.json())
    .then(res => setData(res.featured_albums))
}, [])


  const moveRight = () => {
    if(isClicked<=-3700) {
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
                <Title>Featured</Title>
            </Header>
            <FeaturedWrapper>
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
              <FeaturedContainer >
                <DIV isMoved={isClicked}>
                {data.map(item => {
                      return ( 
                      <FeaturedBox 
                      id={item.id}
                      head={item.head}
                      img={item.thumbnail_url}
                      title={item.artist[0].name}
                      subtitle={item.name}
                      />   
                      )
                  })}
                  </DIV>
              </FeaturedContainer>     
            </FeaturedWrapper>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 100%;
height: 428px;
padding-bottom: 20px;
background-color: black;
overflow: hidden;
`;
const Header = styled.div`
height: 40px;
margin: 0 28px;
`;
const Title = styled.div`
margin-bottom: 11px;
height: 24px;
color: white;
font-size: 16px;
font-weight: 500;
`;
const FeaturedWrapper = styled.div`
height: 356px;
padding-bottom: 20px;
display: flex;
position: relative;
`;
const LeftBtn = styled.div`
position: absolute;
width: 40px;
margin-top: 100px;
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
margin-top: 100px;
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

const FeaturedContainer = styled.div``;
const DIV = styled.div`
position:absolute;
/* left: ${props=> props.isMoved}px; */
transform: translateX(${props=> props.isMoved}px);
transition: 1s;
display: flex;
`;
export default Featured
