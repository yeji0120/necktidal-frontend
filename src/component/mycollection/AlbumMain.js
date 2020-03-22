import React, { useState, useEffect } from 'react';
import Nav from 'component/tidalhome/nav/Nav';
import Header from 'component/tidalhome/header/Header';
import AlbumBox from 'component/mycollection/AlbumBox';
import { HURL } from "config";
import styled from 'styled-components'; 



const AlbumMain = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(`${HURL}/account/collection?category=album`,
        {method: "GET",
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFhYUBuLmNvbSJ9.IFMAeiy2OMHXrn7URVhSa8_AwbcHu14fPljCeks75GA'
        },
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
                <Header title={"Albums"} />
                <Content>
                    <TitleDiv>
                         <Title>Albums</Title>
                     </TitleDiv>
                     <ListContainer>
                     {data.map(item => {
                        return (
                        <AlbumBox 
                            id={item.id}
                            title={item.name}
                            subtitle={item.artist}
                            thumbnail={item.thumbnail_url}/>
                        )
                     })}
                     </ListContainer>
                </Content>
            </Right>
        </Container>
    );
};
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
  height: 100vh;
  background-color: black;
`;
const Content = styled.div`
margin-top: 82px;
width: 100%;
height: 100%;
object-fit: cover;
box-sizing: border-box;
background-color: black;
`;
const TitleDiv = styled.div`
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
const ListContainer = styled.div`
padding: 0 20px;
display: flex;
flex-wrap: wrap;
`;
export default AlbumMain
