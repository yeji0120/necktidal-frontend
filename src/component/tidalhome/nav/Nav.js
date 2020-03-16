import React from 'react'
import NavUser from 'component/tidalhome/nav/NavUser'
import NavMenu from 'component/tidalhome/nav/NavMenu'
import NavCollection from 'component/tidalhome/nav/NavCollection'
import NavPlaylists from 'component/tidalhome/nav/NavPlaylists'
import styled from 'styled-components'

const Nav = () => {
    return (
        <>
        <SiderNav>
            <NavUser />
            <NavMenu />
            <NavCollection />
            <NavPlaylists />
        </SiderNav>
        </>
    )
}

const SiderNav = styled.div`
width: 240px;
height: 100vh;
background-color: rgb(36, 37, 40);
display: block;
position: fixed;
box-sizing: border-box;
z-index: 10;
`;
export default Nav