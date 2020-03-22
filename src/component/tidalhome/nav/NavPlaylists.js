import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import { HURL } from "config.js";
import Modal from 'react-modal';
import { BackgroundColor } from 'styled-icons/foundation';
Modal.setAppElement('#root')

const NavPlaylists = () => {
    const [isClicked,setIsClicked] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const AddClick = () => {
        setIsClicked(!isClicked);
    }

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [playlist, setPlaylist] = useState([])
    useEffect(()=>{
        console.log({
            title,
            desc,
            playlist
        });
    });

    const onChangeTitle = e =>{
        setTitle(e.target.value)
    }
    const onChangeDesc = e =>{
        setDesc(e.target.value)
    }
    let token = localStorage.getItem("token")
    const handlesave = () => {
        fetch(`${HURL}/account/playlist`,{
            method:'POST',
            headers:{'Authorization':token
            },
            body: JSON.stringify({
                playlist_name:title,
                description:desc
            })

        })
        .then(res => res.json())
        .then(res=>{
            return setModalIsOpen(false)

        })
        window.location.reload(true)
    }
    useEffect(()=>{
        fetch(`${HURL}/account/playlist`,{
            method:'GET',
            headers:{'Authorization':token
            }
        })
        .then(res => res.json())
        .then(res=>{
            setPlaylist(res.playlists)

        })
    },[]);

    const goDelete = (name) =>{
        fetch(`${HURL}/account/playlist`,{
            method: 'Delete',
            headers: {
                'Authorization':token
            },
            body: JSON.stringify({
                playlist_name:name
            })
        }) 
        window.location.reload(true)
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
                 <HoverBox
                 onClick={()=> setModalIsOpen(true)}>
                    <AddIcon>
                        <Path d="M 17 11.3 L 12.8 11.3 L 12.8 7 L 11.3 7 L 11.3 11.3 L 7 11.3 L 7 12.8 L 11.3 12.8 L 11.3 17 L 12.8 17 L 12.8 12.8 L 17 12.8 L 17 11.3 Z"/>
                    </AddIcon>
                    <Text >Create new playlist</Text>
                 </HoverBox>
             </Container>
             {playlist && playlist.map((el,idx)=>(
                        <Container key={idx}>
                            <HoverBox>
                                <Text >{el.name}</Text>
                                <Delete
                                onClick={()=>{goDelete(el.name)}}>삭제</Delete>
                            </HoverBox>
                        </Container>
             ))
}
             <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}
             style={
                 {
                     overlay: {
                        backgroundColor:'rgba(0, 0, 0, 0.8)',
                     },
                     content:{
                         border:'none',
                         backgroundColor:'#232428',
                         overflow: 'hidden',
                         fontSize:'100px',
                         position: 'absolute',
                         width:'500px',
                         height:'350px',
                         position:'absolute',
                         marginTop:'300px',
                         left:'40%',
                         fontSize:'18px',
                         fontFamily:'nationale-regular'
                         
                     }
                 }
             }
             >
                 <Titlediv>
                 <Htag>Create new playlist</Htag>
                 <Htagbutton
                 onClick={()=> setModalIsOpen(false)}>X</Htagbutton>
                 </Titlediv>
                 <Ptag1>Title</Ptag1>
                 <Ptaginput1
                 value={title}
                 onChange={onChangeTitle}
                 placeholder='Please give your playlist a title'></Ptaginput1>
                 <Ptag2>Write a description</Ptag2>
                 <Ptaginput2
                 value={desc}
                 onChange={onChangeDesc}></Ptaginput2>
                 <CreateNew
                 onClick={handlesave}>Create New</CreateNew>
             </Modal>
         </Wrapper>
        </>
    )
};

const CreateNew = styled.button`
color:cyan;
font-size:19px;
background-color:#393B3E;
border:none;
border-radius:10px;
font-family:nationale-regular;
height:50px;
width:150px;
margin-left:310px;
margin-top:30px;
:hover{
    cursor:pointer;
}

`

const Titlediv = styled.div`
display:flex;
justify-content:space-between;
`
const Htagbutton = styled.div`
color:#989EA8;
:hover{
    cursor:pointer;
}
`

const Htag = styled.div`
color:white;
margin-bottom:20px;`

const Ptag1 =styled.div`
color:#989EA8;
margin-bottom:10px;`
const Ptag2 =styled.div`
color:#989EA8;
margin-bottom:30px;`


const Ptaginput1 = styled.input`
line-height:40px;
font-size:16px;
background-color:rgba(0, 0, 0, 0);
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #393B3E;
margin-bottom:20px;
width:100%;
color:white;
:focus{
    border-bottom:1px solid cyan;
}`

const Ptaginput2 = styled.input`
font-size:16px;
background-color:rgba(0, 0, 0, 0);
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #393B3E;
width:100%;
color:white;
:focus{
    border-bottom:1px solid cyan;
}`





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
font-size: 16px;
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
display: flex;
align-items: center;
justify-content: center;
`;
const HoverBox = styled.div`
margin-top: 10px;
width: 216px;
padding: 13px 0;
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
font-size: 15px;
color: white;
`
const Delete = styled.span`
font-size:8px;
:hover{
    color:white;
}`

export default NavPlaylists
