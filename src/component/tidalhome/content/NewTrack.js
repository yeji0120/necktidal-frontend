import React, {useState, useEffect}from 'react'
import NewTrackBox from 'component/tidalhome/content/NewTrackBox'
import styled, { css } from 'styled-components'

const NewTrack = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://10.58.3.46:8000/music/track/new?limit=5",
        {method: "GET" 
    })
        .then(res => res.json())
        .then(res => setData(res.tracks))

    }, [])
    return (
        <>
        <Wrapper>
             <Header>
                    <Subject>Suggested New Traks</Subject>
                    <ViewAll>View all</ViewAll>
            </Header>
            <ListContainer>
                <HeaderContainer>
                    <Left></Left>
                    <Title>TITLE</Title>
                    <Artist>ARTIST</Artist>
                    <Album>ALBUM</Album>
                    <Time>TIME</Time>
                    <Right></Right>
                </HeaderContainer>
                {/* <ItemContainer> */}
                    {data.map(item => {
                        return (
                            <NewTrackBox 
                            id={item.id}
                            title={item.name}
                            artist={item.artist_info[0].name}
                            album={item.album_info[0].name}
                            thumbnail={item.album_info[0].thumbnail_url}
                            time={item.time.slice(3,8)}
                            />
                        )
                    })}
                {/* </ItemContainer> */}
            </ListContainer>
        </Wrapper>
        </>
    )
}

const Wrapper=styled.div`
width: 100%;
height: 370px;
padding-bottom: 30px;
overflow: hidden;
background-color: black;
`;
const Header = styled.div`
margin-top: 5px;
height: 40px;
margin: 0 28px;
display: flex;
justify-content: space-between;
`;
const Subject = styled.div`
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
width: auto;
width: 100%;
height: 276px;
/* max-width: 971px; */
overflow: hidden;
margin: 0 28px;
display: block;
`;
const HeaderContainer = styled.div`
width:100%;
height:36px;
display: flex;
color: gray;
font-size: 12px;
font-weight: 700;
`;
const Left = styled.div`
width: 54px;
contain: strict;
`;
const Title = styled.div`
width: 40%;
display: flex;
align-items: center;
padding-left: 10px;
`;
const Artist = styled.div`
width: 35%;
display: flex;
align-items: center;
padding-left: 10px;
`;
const Album = styled.div`
width: 25%;
display: flex;
align-items: center;
padding-left: 10px;
`;
const Time = styled.div`
width: 77px;
display: flex;
align-items: center;
padding-left: 10px;
`;
const Right = styled.div`
width: 180px;
`;
// const ItemContainer = styled.div`
// width:100%;
// height: auto;
// `;
export default NewTrack