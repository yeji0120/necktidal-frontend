import React from 'react'
import styled, { css } from 'styled-components'

const Header = () => {
    return (
        <>
        <Wrapper>
            <Container>
                <Left>
                    <ArrowIcon>
                        <LeftBtn>
                            <Path d="M 20 11.3 L 7.8 11.3 L 13.5 5.5 L 12.5 4.5 L 4.9 12 L 12.5 19.5 L 13.5 18.5 L 7.8 12.8 L 20 12.8 L 20 11.3 Z"/>
                        </LeftBtn>
                        <RightBtn>
                            <Path d="M 11.5 4.5 L 10.5 5.5 L 16.2 11.3 L 4 11.3 L 4 12.8 L 16.2 12.8 L 10.5 18.5 L 11.5 19.5 L 19.1 12 L 11.5 4.5 Z" />
                        </RightBtn>
                    </ArrowIcon>
                    <Text>Home</Text>
                </Left>
               <Right>
               <Search>
                    <SearchIcon>
                        <Path d="M 20 19 l -4.26 -4.26 a 6.77 6.77 0 1 0 -1.06 1.06 L 19 20 Z M 5.25 10.5 a 5.25 5.25 0 1 1 5.25 5.25 A 5.26 5.26 0 0 1 5.25 10.5 Z" />
                    </SearchIcon>
                    <SearchInput type="Search" placeholder="search" />
                </Search>
               </Right>
            </Container>
        </Wrapper>    
        </>
    )
}
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
