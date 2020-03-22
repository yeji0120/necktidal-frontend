import React, {useState, useEffect} from 'react'
import styled, { css } from 'styled-components'
import { HURL } from 'config'

const NavUser = () => {
    const [isClicked, setIsClicked] = useState(false)
    const AddClick = () => {
        setIsClicked(!isClicked);
    }
    const [userInfo, setUserInfo] = useState("");
    let token = localStorage.getItem("token")
    useEffect(()=>{
        fetch('http://10.58.7.72:8000/account/',{
            method:'GET',
            headers:{'Authorization':token
            }
        })
        .then(res => res.json())
        .then(res=>{
            setUserInfo(res.user_info.name)

        })
    })
    return (
       <>
       <Wrapper draggable="false">
        <Container onClick={AddClick}>
            <UserIcon> 
            <ID>Kim</ID> 
            </UserIcon>
            <MoreIcon>
                <Circle />
                <Circle />
                <Circle />    
             </MoreIcon>
        </Container>
             <MoreContainer isActive={isClicked}>
                 <MoreList>
                     <MoreItem>
                         <MoreText>Manage Subscription</MoreText>
                    </MoreItem>
                     <MoreItem>
                        <MoreText>Setting</MoreText>
                     </MoreItem>
                     <MoreItem>
                         <MoreText>Log out</MoreText>
                    </MoreItem>
                 </MoreList>
             </MoreContainer>
        
       </Wrapper>
        </>
    )
}

const tidalBlack = css`
background-color: rgb(36, 37, 40);
`;

const Wrapper = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
background-color: ${tidalBlack};
`;
const Circle = styled.circle`
background-color: rgb(114, 119, 127);
width: 3px;
height: 3px;
border-radius: 50%;
margin-left: 2px;
`;
const Container = styled.div`
position: relative;
margin-top: 10px;
width: 216px;
padding: 10px 0;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 8px;
background-color: ${tidalBlack};
cursor: pointer;
&:hover {
    background-color: #485460;
    ${Circle}{
        background-color:white;
    }
  }
`;

const UserIcon = styled.div`
width: 24px;
height: 24px;
border-radius: 50%;
background-color: rgb(114, 119, 127);
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
`;
const ID = styled.div`
font-weight: 500;
font-size: 5px;
color: lightgray;
text-transform: uppercase;
`;
const MoreIcon = styled.div`
margin-right: 12px;
width: 24px;
display: flex;
justify-content: center;
align-items: center;
`;
const MoreContainer = styled.div`
position: absolute;
padding: 10px 0;
left: 200px;
top: 40.0469px;
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
padding: 10px 0;
/* height: 30px; */
display: flex;
align-items: center;
&:hover{
    background-color: #485460;
}`;
const MoreText = styled.span`
margin-left: 14px;
`;

export default NavUser
