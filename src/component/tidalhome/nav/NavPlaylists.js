import React, {useState} from 'react'
import styled, { css } from 'styled-components'

const NavPlaylists = () => {
    const [isClicked,setIsClicked] = useState(false)

    const AddClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <>
         <Wrapper>
             <MyPlaylist>
                <Title>My Playlists</Title>
                    <MoreIcon onClick={AddClick}>
                        <Circle />
                        <Circle />
                        <Circle />  
                    </MoreIcon>
                    <MoreContainer isActive={isClicked}>
                        <MoreList>
                            <MoreItem>
                                <MoreText>Date</MoreText>
                            </MoreItem>
                            <MoreItem>
                                <MoreText>Alphabetical</MoreText>
                            </MoreItem>
                        </MoreList>
                    </MoreContainer>
             </MyPlaylist>
             <Container>
                 <HoverBox>
                    <AddIcon>
                        <Path d="M 17 11.3 L 12.8 11.3 L 12.8 7 L 11.3 7 L 11.3 11.3 L 7 11.3 L 7 12.8 L 11.3 12.8 L 11.3 17 L 12.8 17 L 12.8 12.8 L 17 12.8 L 17 11.3 Z"/>
                    </AddIcon>
                    <Text>Create new playlist</Text>
                 </HoverBox>
             </Container>

         </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
margin: 25px 0 0;
`;

const MyPlaylist = styled.div`
margin-top: 40px;
margin-left: 20px;
margin-bottom: 5px;
height:12px;
display: flex;
justify-content:space-between;
align-items: center;
`;
const Title = styled.div`
color: rgba(229, 238, 255, 0.6);;
font-size: 13px;
font-weight: 500;
text-transform: uppercase;
font-family: "national-bold";
`;
const Circle = styled.circle`
background-color: rgb(114, 119, 127);
width: 3px;
height: 3px;
border-radius: 50%;
margin-left: 2px;
`;
const MoreIcon = styled.div`
position: relative;
margin-right: 20px;
width: 24px;
height: 24px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover{
    ${Circle}{
        background-color:white;
    }
}
`;
const MoreContainer = styled.div`
position: absolute;
padding: 10px 0;
left: 211px;
top: 575.844px;
z-index: 11;
width: 190px;
background-color: rgb(36, 37, 40);
box-shadow: 0 5px 16px 0 rgba(0,0,0,.5);
border-radius: 12px;
display: ${props=> props.isActive ? "block" : "none"};
`;

const MoreList = styled.div`
color: white;
font-size: 14px;
font-weight: 500;
`;
const MoreItem = styled.div`
height: 30px;
display: flex;
align-items: center;
&:hover{
    background-color: #485460;
}`;
const MoreText = styled.span`
margin-left: 14px;
`;

const Container = styled.div`
margin-top: 10px;
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
cursor: pointer;
&:hover {
    background-color: #485460
  }
`;

const AddIcon = styled.svg`
margin-left: 11px;
width: 24px;
height: 24px;
background-color: rgba(229, 238, 255, 0.2);
border-radius: 50%;
cursor: pointer;
`;
const Path = styled.path`
fill: rgba(229, 238, 255, 0.6);`;

const Text = styled.span`
margin-left: 15px;
font-size: 12px;
color: white;
`

export default NavPlaylists
