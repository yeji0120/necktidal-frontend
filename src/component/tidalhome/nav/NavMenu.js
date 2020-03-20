import React from 'react'
import {useHistory} from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavMenu = () => {
    let history = useHistory();
    return (
        <>
        <Wrapper>
            <Container>
                <HoverBox onClick={ () => history.push("/home")}>
                    <TEXT>Home</TEXT>
                </HoverBox>
           </Container>
           <Container>
                <HoverBox>
                    <TEXT>Explore</TEXT>
                </HoverBox>
           </Container>
           <Container>
                <HoverBox>
                    <TEXT>Videos</TEXT>
                </HoverBox>
           </Container>
        </Wrapper>
        </>
    )
}
const tidalBlack = css`
background-color: rgb(36, 37, 40);
`;

const Wrapper = styled.div`
margin: 15px 0 0;
padding-bottom: 5px;
background-color: ${tidalBlack};
`
const Container = styled.div`
box-sizing: border-box;
height: 44.09px;
display: flex;
align-items: center;
justify-content: center;
`;
const HoverBox = styled.div`
margin-top: 10px;
width: 216px;
height: 44.09px;
border-radius: 8px;
display: flex;
align-items: center;
background-color: ${tidalBlack};
cursor: pointer;
&:hover {
    background-color: #485460
  }
`;

const TEXT = styled.div`
margin-left: 11px;
color: white;
font-size: 18px;
font-weight: 500;
`;
export default NavMenu
