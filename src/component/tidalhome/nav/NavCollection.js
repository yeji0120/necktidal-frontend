import React from 'react'
import { useHistory} from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavCollection = () => {
    let history = useHistory();
    return (
        <>
     
         <Wrapper>
             <MyCollection>My Collection</MyCollection>
             <Container>
                 <HoverBox>
                    <Icon>
                        <Path d="M 2.25 12 A 9.73 9.73 0 0 1 6.59 3.89 L 5.76 2.64 a 11.25 11.25 0 0 0 0 18.72 l 0.83 -1.25 A 9.73 9.73 0 0 1 2.25 12 Z"/>
                        <Path d="M 18.24 2.64 l -0.83 1.25 a 9.75 9.75 0 0 1 0 16.22 l 0.83 1.25 a 11.25 11.25 0 0 0 0 -18.72 Z" />
                        <Path d="M 9.37 8 L 8.53 6.8 a 6.25 6.25 0 0 0 0 10.4 L 9.37 16 a 4.75 4.75 0 0 1 0 -7.9 Z" />
                        <Path d="M 15.47 6.8 L 14.63 8 a 4.75 4.75 0 0 1 0 7.9 l 0.83 1.25 a 6.25 6.25 0 0 0 0 -10.4 Z" />
                        <Circle cx="12" cy="12" r="1.5" />
                    </Icon>
                    <Text>My Mix</Text>
                 </HoverBox>
             </Container>
             <Container>
                 <HoverBox>
                    <Icon>
                        <Path d="M 6.75 15 a 3.71 3.71 0 0 0 -2.25 -0.77 A 3.75 3.75 0 1 0 8.25 18 V 3 H 6.75 Z M 4.5 20.25 A 2.25 2.25 0 1 1 6.75 18 A 2.25 2.25 0 0 1 4.5 20.25 Z"/>
                        <Path d="M 12 14.8 H 21 V 16.3 H 12 Z" />
                        <Path d="M 12 6.8 H 23 V 8.3 H 12 Z" />
                        <Path d="M 12 10.8 H 22 V 12.3 H 12 Z" />
                    </Icon>
                    <Text>Playlists</Text>
                 </HoverBox>
             </Container>
             <Container>
                 <HoverBox onClick={ () => history.push("/mycollectionalbum")}>
                    <Icon>
                        <Path d="M 20 5.63 A 10.2 10.2 0 0 0 4 18.37 a 10.13 10.13 0 0 0 6.84 3.77 A 10.42 10.42 0 0 0 12 22.2 A 10.2 10.2 0 0 0 20 5.63 Z M 20.65 13 A 8.7 8.7 0 1 1 12 3.3 a 8.79 8.79 0 0 1 1 0.05 A 8.7 8.7 0 0 1 20.65 13 Z" />
                        <Path d="M 12 9 a 3 3 0 1 0 3 3 A 3 3 0 0 0 12 9 Z m 0 4.5 A 1.5 1.5 0 1 1 13.5 12 A 1.5 1.5 0 0 1 12 13.5 Z" />
                    </Icon>
                    <Text>Albums</Text>
                 </HoverBox>
             </Container>
             <Container>
                 <HoverBox>
                    <Icon>
                        <Path d="M 8.1 4.65 V 15.91 a 3.45 3.45 0 1 0 1.5 2.84 V 5.85 L 19.8 3.49 V 14.11 A 3.45 3.45 0 1 0 21.3 17 V 1.61 Z m -2 16 a 2 2 0 1 1 2 -2 A 2 2 0 0 1 6.15 20.7 Z m 11.7 -1.8 A 1.95 1.95 0 1 1 19.8 17 A 2 2 0 0 1 17.85 18.9 Z" />
                    </Icon>
                    <Text>Tracks</Text>
                 </HoverBox>
             </Container>
             <Container>
                 <HoverBox>
                    <Icon>
                        <Path d="M 1.8 3.6 V 20.4 H 22.2 V 3.6 Z M 20.7 18.9 H 3.3 V 5.1 H 20.7 Z" />
                        <Path d="M 9.67 7.9 v 8.2 L 15.83 12 Z m 1.5 2.8 L 13.12 12 l -1.95 1.3 Z" />
                    </Icon>
                    <Text>Videos</Text>
                 </HoverBox>
             </Container>
             <Container>
                 <HoverBox>
                    <Icon>
                        <Path d="M 20 4.22 a 5.67 5.67 0 0 0 -9.68 4.57 l -8 9.79 l 3.3 3.3 l 9.79 -8 c 0.18 0 0.36 0.05 0.55 0.05 a 5.7 5.7 0 0 0 4 -9.73 Z M 5.74 19.86 L 4.36 18.48 l 6.44 -7.89 a 5.48 5.48 0 0 0 2.83 2.84 Z m 13.21 -8.65 a 4.2 4.2 0 1 1 0 -5.94 A 4.17 4.17 0 0 1 18.95 11.22 Z" />
                    </Icon>
                    <Text>Artists</Text>
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
margin: 25px 0 0;
height: 285px;
background-color: ${tidalBlack};
`;

const MyCollection = styled.div`
margin-left: 20px;
margin-bottom: 5px;
height:12px;
color: rgba(229, 238, 255, 0.6);;
font-size: 16px;
font-weight: 500;
text-transform: uppercase;
font-family: "national-bold";
`;

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
const Icon = styled.svg`
margin-left: 11px;
width: 24px;
height: 24px;
fill: rgba(229, 238, 255, 0.6);
`;
const Path = styled.path``;
const Circle = styled.circle``;
const Text = styled.span`
margin-left: 15px;
font-size: 15px;
color: white;
`
export default NavCollection
