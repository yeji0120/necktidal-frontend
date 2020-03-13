import React, { useState, useEffect } from 'react';
import FeaturedBox from 'component/tidalhome/content/FeaturedBox'
import FeaturedData from 'component/tidalhome/content/data/FeaturedData'
import styled, { css } from 'styled-components'

const Featured = () => {
  const [isClicked,setIsClicked] = useState(0);

  const moveLeft = () => {
    console.log("1");
    setIsClicked(isClicked - 300);
    // x -= 100; // 왼쪽으로 100px 이동
    // document.getElementById("list").style.left = x + "px";
  }

  const moveRight = () => {
    setIsClicked(isClicked + 300);
    // x += 100; // 오른쪽으로 100px 이동
    // document.getElementById("list").style.left = x + "px";
  }

    return (
        <>
        <Wrapper>
            <Header>
                <Title>Featured</Title>
                <FeaturedWrapper>
                  <LeftBtn onClick={()=>moveLeft()}>
                  <LeftSvg>
                      <Path d="M 28.8989 24 L 19.1161 14.2172 L 20.8839 12.4494 L 32.4344 24 L 20.8839 35.5505 L 19.1161 33.7827 L 28.8989 24 Z" />
                    </LeftSvg>
                  </LeftBtn>
                  <RightBtn onClick={()=>moveRight()}>
                    <RightSvg>
                      <Path d="M 28.8989 24 L 19.1161 14.2172 L 20.8839 12.4494 L 32.4344 24 L 20.8839 35.5505 L 19.1161 33.7827 L 28.8989 24 Z" />
                    </RightSvg></RightBtn>
                  <FeaturedContainer >
                    <DIV isMoved={isClicked}>
                    {FeaturedData.map(item => {
                          return ( 
                          <FeaturedBox 
                          id={item.id}
                          img={item.img}
                          head={item.head}
                          title={item.title}
                          subtitle={item.subtitle}
                          />   
                          )
                      })}
                      </DIV>
                  </FeaturedContainer>     
                </FeaturedWrapper>
            </Header>
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
height: 336px;
top: 0;
left: 0;
background: #00f;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
`;
const LeftSvg = styled.svg`
transform: rotate(180deg);
fill: white;
`;
const RightBtn = styled.div`
position: absolute;
width: 40px;
height: 336px;
top: 0;
right: 0;
background: #00f;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
`;
const RightSvg = styled.svg`
fill:white;
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
