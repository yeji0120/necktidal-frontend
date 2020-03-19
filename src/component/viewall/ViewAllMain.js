import React, { useState, useEffect } from 'react'
import Nav from 'component/tidalhome/nav/Nav';
import Header from 'component/tidalhome/header/Header';
import AlbumBox from 'component/mycollection/AlbumBox';
import { HURL } from "config";
import styled from 'styled-components'

const ViewAllMain = () => {
    const [data,setData] = useState([]);

    // let token = localStorage.getItem("token")
    // 토큰 자리에 token이라고 적으면 됨. 따옴표 없음

    useEffect(()=>{
        fetch(`${HURL}/music/album/new?limit=20&days=15`,
        // fetch("http://localhost:3000/Data/NewAlbumData.json",
        {method: "GET"
    })
        .then(res => res.json())
        .then(res => setData(res.albums))

    }, [])
    return (
        <Container>
        <Left>
            <Nav />
        </Left>
        <Right>
            <Header title={"View All"} />
            <Content>
              
                 <ListContainer>
                 {data.map(item => {
                    return (
                    <AlbumBox 
                    id={item.id}
                    title={item.name}
                    subtitle={item.artist[0].name}
                    thumbnail={item.thumbnail_url}/>
                    )
                 })}
                 </ListContainer>
            </Content>
        </Right>
    </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: black;
`;

const Left = styled.div`
  width: 240px;
  height: auto;
`;

const Right = styled.div`
  width: calc(100% - 240px);
  height: auto;
`;
const Content = styled.div`
margin-top: 82px;
width: 100%;
height: 100%;
object-fit: cover;
box-sizing: border-box;
background-color: black;
`;

const ListContainer = styled.div`
padding: 0 20px;
display: flex;
flex-wrap: wrap;
`;

export default ViewAllMain