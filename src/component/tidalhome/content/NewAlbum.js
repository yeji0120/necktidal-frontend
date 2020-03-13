import React, { useState, useEffect } from 'react';
import NewAlbumBox from 'component/tidalhome/content/NewAlbumBox'
import styled, { css } from 'styled-components'

const NewAlbum = () => {
    const [data,setData] = useState([]);

    // function fetchData() {
    //     const res = await fetch("http://10.58.2.53:8000/music/album", {
    //         method: "GET"
    //     });
    //     res.json()
    //     .then(res => setData(res.new_albums));
    // }

    // useEffect(() => {
    //     fetchData();
    // });


    useEffect(()=>{
        fetch("http://10.58.2.53:8000/music/album?limit=20",
        {method: "GET"
    })
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => setData(res.new_albums))

    }, [])
    return (
        <>
        <Wrapper>
            <Header>
                    <Title>Suggested New Albums</Title>
                    <ViewAll>View all</ViewAll>
            </Header>
            <ListContainer>
                <ItemContainer>
                    {data.map(item => {
                        return (
                            <NewAlbumBox 
                            id={item.id}
                            title={item.album}
                            subtitle={item.artist}
                            thumbnail={item.thumbnail_url}
                            />
                        )
                    })}   
                </ItemContainer>
            </ListContainer>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 100%;
height: 300px;
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
height:280px;
overflow: hidden;
/* position: relative; */
`;
const ItemContainer = styled.div`
height: 280px;
margin-left: 30px;
display: flex;
`;


export default NewAlbum

