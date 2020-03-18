import React from 'react'
import Featured from 'component/tidalhome/content/Featured'
import RecentlyPlayed from 'component/tidalhome/content/RecentlyPlayed'
import NewTrack from 'component/tidalhome/content/NewTrack'
import NewAlbum from 'component/tidalhome/content/NewAlbum'
import PoplularPlaylists from 'component/tidalhome/content/PopularPlaylists'
import styled from 'styled-components'

const Content = () => {
    return (
        <>
        <Wrapper>
            <Featured/>
            <RecentlyPlayed />
            <NewTrack />
            <NewAlbum />
            <PoplularPlaylists />
        </Wrapper>
            
        </>
    )
}
const Wrapper = styled.div`
margin-top: 82px;
width: 100%;
height: 100%;
object-fit: cover;
box-sizing: border-box;
`;


export default Content
