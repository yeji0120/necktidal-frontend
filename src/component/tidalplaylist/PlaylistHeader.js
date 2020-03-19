import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";
import { useHistory } from "react-router-dom";

import { CompressAlt } from "@styled-icons/fa-solid";
import { Search } from "@styled-icons/evaicons-solid";
import { OrderPlay } from "@styled-icons/remix-fill";

const PlaylistHeaderContainer = () => {
  const [inputFocus, setInputFocus] = useState(false);
  let history = useHistory();

  return (
    <PlaylistHeader>
      <FlexBox>
        <ResizeBtn>
          <Alt />
        </ResizeBtn>
        <ResizeText>Minimized</ResizeText>
        <NecktidalLogo
          src="necktidal-logo.png"
          alt="necktidal-logo"
          onClick={() => history.push("/")}
        />
      </FlexBox>
      <SearchBox>
        <SearchInnerBox>
          <SearchIcon>
            <Search />
          </SearchIcon>
          <SearchInput
            inputFocus={inputFocus}
            onFocus={() => setInputFocus(true)}
            type="text"
            placeholder="Search"
          ></SearchInput>
        </SearchInnerBox>
        <QueueBtn>
          <OrderList />
        </QueueBtn>
      </SearchBox>
    </PlaylistHeader>
  );
};

const PlaylistHeader = styled.div`
  width: 100vw;
  height: 84px;
  display: flex;
  z-index: 3;
  justify-content: space-between;
  overflow: hidden;
  /* background-color: #020709; */
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
const NecktidalLogo = styled.img`
  width: 66px;
  margin-left: 20px;
`;
const ResizeBtn = styled.div`
  width: 17px;
  padding-left: 30px;
  box-sizing: border-box;
  color: white;
`;
const Alt = styled(CompressAlt)`
  width: 17px;
`;
const ResizeText = styled.div`
  margin-left: 25px;
  color: white;
  font-size: 14px;
`;
const SearchBox = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled.div`
  width: 22px;
  padding-left: 7px;
  color: white;
`;
const SearchInput = styled.input`
  width: 334px;
  height: 36px;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  padding-left: 40px;
  outline: none;
  border: none;
  color: white;
  font-size: 14px;
  background-color: transparent;
  &::placeholder {
    font-size: 14px;
  }
`;
const SearchInnerBox = styled.div`
  width: 388px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgba(45, 48, 51, 0.5);
  ${SearchInput}:focus & {
    background-color: rgba(255, 255, 255, 1);
  }
`;
const QueueBtn = styled.div`
  width: 24px;
  padding-right: 30px;
  color: white;
`;
const OrderList = styled(OrderPlay)`
  width: 24px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default PlaylistHeaderContainer;
