import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';



const Header = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [search,setSearch] = useState('');
    const [Artist, setArtist] = useState([]);
    let history = useHistory();

    //Artist에 search값이 한단계 늦게 입력되는것같다.
    //modal이 검색시 포커스를 잃는다

    const onChangeSearch = e =>{
        setSearch(e.target.value)
        setModalIsOpen(true)
        if(e.target.value === ''){
            setArtist([])
        } else {
        fetch(`http://10.58.3.53:8002/music/?search=${search}&limit=3`,{
        method:'GET'
        })
        .then(res => res.json())  
        .then(res=>{
            res && setArtist(res)     
        })
        }
    }
  
    return (
        <>
        <Wrapper>
            <Container>
                <Left>
                    <ArrowIcon>
                        <LeftBtn
                        onClick={()=> history.push("/home")}>
                            <Path d="M 20 11.3 L 7.8 11.3 L 13.5 5.5 L 12.5 4.5 L 4.9 12 L 12.5 19.5 L 13.5 18.5 L 7.8 12.8 L 20 12.8 L 20 11.3 Z"/>
                        </LeftBtn>
                        <RightBtn>
                            <Path d="M 11.5 4.5 L 10.5 5.5 L 16.2 11.3 L 4 11.3 L 4 12.8 L 16.2 12.8 L 10.5 18.5 L 11.5 19.5 L 19.1 12 L 11.5 4.5 Z" />
                        </RightBtn>
                    </ArrowIcon>
                    <Text>{props.title}</Text>
                </Left>
               <Right>
               <Search>
                    <SearchIcon
                    onClick={()=> setModalIsOpen(true)}>
                        <Path d="M 20 19 l -4.26 -4.26 a 6.77 6.77 0 1 0 -1.06 1.06 L 19 20 Z M 5.25 10.5 a 5.25 5.25 0 1 1 5.25 5.25 A 5.26 5.26 0 0 1 5.25 10.5 Z" />
                    </SearchIcon>
                    <SearchInput 
                    type="Search" 
                    type="text"
                    placeholder="search"
                    onChange={onChangeSearch} />
                </Search>
               </Right>
            </Container>
            <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}
             style={
                 {
                     overlay: {
                        backgroundColor:'transparent',
                     },
                     content:{
                         border:'none',
                         borderRadius:"8px",
                         backgroundColor:'#232428',
                         position: 'absolute',
                         width:'390px',
                         height:'350px',
                         position:'absolute',
                         top:'80px',
                         left:'78%',
                         fontSize:'18px',
                         fontFamily:'nationale-regular'
                         
                     }
                 }
             }
             >  
                 <ArtistSection>
                        <Artists>Artists</Artists>
                            {Artist.artist_results && Artist.artist_results.map((el,idx)=>{ console.log('name: ', Artist)
                                return <Artistsdiv key={idx}>
                                    <Picture src={el.thumbnail_url}></Picture>
                                    <Detail>
                                        <Detail1>{el.name}</Detail1>
                                        <Detail2>Artist</Detail2>
                                    </Detail>
                                </Artistsdiv>
                                })
                            }
                    
                 </ArtistSection>
                 
                 <AlbumSection>
                    <Albums>Albums</Albums>
                        {Artist.album_results && Artist.album_results.map((el,idx)=>{ console.log('name:',Artist.album_results)
                            return <Albumsdiv key={idx}>
                                <Albumpicture src={el.thumbnail_url}></Albumpicture>
                                <Albumdetail>
                                    <Albumdetail1>{el.name}</Albumdetail1>
                                    <Albumdetail2>Album by Jutin {el.artist}</Albumdetail2>
                                </Albumdetail>
                            </Albumsdiv>
                            })
                        }
                 </AlbumSection>
                


             </Modal>
        </Wrapper>    
        </>
    )
}
// 모달이다
const ArtistSection = styled.div``
const AlbumSection = styled.div``
const Artists = styled.div`
color:white;
margin-bottom:10px;`
const Albums = styled.div`
margin-top:20px;
margin-bottom:15px;
color:white;`
const Tracks = styled.div`
color:white;`


const Artistsdiv = styled.div`
display:flex;
font-size:15px;
margin-bottom:10px;

`

const Picture = styled.img`
width:50px;
border-radius:30px;`
const Detail = styled.div`
margin-left:20px;
margin-top:5px;`
const Detail1 = styled.div`
color:white;`
const Detail2 = styled.div`
color:#979DA9;`





const Albumsdiv = styled.div`
display:flex;
font-size:12px;
margin-bottom:20px;`
const Albumpicture = styled.img`
width:50px;`
const Albumdetail = styled.div`
margin-left:20px;
margin-top:5px;`
const Albumdetail1 = styled.div`
color:white;`
const Albumdetail2 = styled.div`
color:#979DA9`

const Wrapper = styled.div`
width: calc(100% - 240px);
height: 80px;
object-fit: cover;
background-color: black;
position: fixed;
z-index: 9;
box-sizing: border-box;
display: flex;
align-items: center;
`;

const Container = styled.div`
margin: 5px auto;
width: 100%;
height: 36px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;
`;
const Left = styled.div`
display:flex;
`;

const ArrowIcon = styled.div`
margin-left: 24px;
margin-bottom: 8px;
width: 56px;
height: 24px;
display: flex;
`;

const LeftBtn = styled.svg`
width: 24px;
height: 24px;
cursor: pointer;
`;

const RightBtn = styled.svg`
margin-left: 8px;
width: 24px;
height: 24px;
cursor: pointer;
`;

const Path = styled.path`
fill: white;`;

const Text = styled.div`
margin-top: 5px;
margin-left: 20px;
font-size: 13px;
color: white;
`;
const Right = styled.div`
margin-right: 20px;
`;
const Search = styled.div`
width: 388px;
height: 36px;
border-radius: 8px;
display: flex;
align-items: center;
background-color: rgba(229, 238, 255, 0.2);
`;

const SearchIcon = styled.svg`
width: 24px;
height: 24px;
margin-right: 1px;
margin-left: 10px;
`;

const SearchInput = styled.input`
margin: 0 8px;
width: 334px;
height: 36px;
border: 0;
font-size: 17px;
background-color: transparent;
cursor: text;
&::placeholder {
    color: gray;
    text-transform: capitalize;
    font-family: "national-regular";
    font-size: 16px;
}
&:focus {
    outline:none;
}
`;
export default Header
