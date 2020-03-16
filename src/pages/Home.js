import React from 'react'
import Nav from 'component/tidalhome/nav/Nav'
import Header from 'component/tidalhome/header/Header'
import Content from 'component/tidalhome/content/Content'
import styled, { css } from 'styled-components'


const Home = () => {
  return (
    <div draggable="false">
      <Container>
        <Left>
           <Nav/>
        </Left>
        <Right>
           <Header />
           <Content />
        </Right>
      </Container>
    </div>
  )

const Container = styled.div`
display: flex;
justify-content: flex-end;
background-color: black;
`;

const Left = styled.div`
width: 240px;
height: 100vh;
`;

const Right = styled.div`
width: calc(100% - 240px);
height: 100vh;
`;

const Tidalhomediv = styled.div``

export default Home
