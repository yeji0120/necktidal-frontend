import React from 'react'
import Featured from 'component/tidalhome/content/Featured'
import RecentlyPlayedTrack from 'component/tidalhome/content/RecentlyPlayedTrack'
import NewTrack from 'component/tidalhome/content/NewTrack'
import NewAlbum from 'component/tidalhome/content/NewAlbum'
import PoplularPlaylists from 'component/tidalhome/content/PopularPlaylists'
import WomenHistory from 'component/tidalhome/content/WomenHistory'
import styled, { css } from 'styled-components'

const Content = () => {
    return (
        <>
        <Wrapper>
            <Featured/>
            <RecentlyPlayedTrack />
            <NewTrack />
            <NewAlbum />
            <PoplularPlaylists />
            <WomenHistory />
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
