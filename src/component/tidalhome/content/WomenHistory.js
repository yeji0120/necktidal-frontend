import React from 'react'
import RecentlyBox from 'component/tidalhome/content/RecentlyBox'
import styled, { css } from 'styled-components'

const WomenHistory = () => {
    return (
        <>
        <Wrapper>
            <Header>
                <Title>Women's History Month: Timeless Legends</Title>
                <ViewAll>View all</ViewAll>
            </Header>
            <ListContainer>
                <ItemContainer>
                    <RecentlyBox />
                    <RecentlyBox />
                    <RecentlyBox />
                    <RecentlyBox />
                    <RecentlyBox />
                    <RecentlyBox />
                </ItemContainer>
            </ListContainer>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 100%;
height: 300px;
padding-top: 10px;
padding-bottom: 30px;
background-color: black;
overflow: hidden;
`;
const Header = styled.div`
height: 40px;
margin: 0 28px;
display: flex;
justify-content: space-between;
`;
const Title = styled.div`
margin-bottom: 11px;
height: 24px;
color: white;
font-size: 15px;
font-weight: 500;
`;
const ViewAll = styled.a`
margin-bottom: 11px;
height: 24px;
color: rgba(229, 238, 255, 0.6);
font-size: 14px;
cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;
const ListContainer = styled.div`
height:280px;
overflow: hidden;
/* position: relative; */
`;
const ItemContainer = styled.div`
height: 280px;
margin-left: 30px;
display: flex;
`;
export default WomenHistory
