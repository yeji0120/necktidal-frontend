import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

const CreditsBox = () => {
  return (
    <CreditsInnerBox>
      <Credits>Credits</Credits>
      <CreditsTable>
        <CreditsLi>
          <CreditsTitle>
            Producer
            <CreditsVlaue>Jamie Hartman</CreditsVlaue>
            <br />
            <CreditsVlaue>Kygo</CreditsVlaue>
            <br />
            <CreditsVlaue>Stuart Crichton</CreditsVlaue>
          </CreditsTitle>
        </CreditsLi>
        <CreditsLi>
          <CreditsTitle>
            Composer
            <CreditsVlaue>Jamie Hartman</CreditsVlaue>
            <br />
            <CreditsVlaue>Justin Stein</CreditsVlaue>
            <br />
            <CreditsVlaue>Kyrre Gørvell-Dahll</CreditsVlaue>
            <br />
            <CreditsVlaue>Stuart Crichton</CreditsVlaue>
          </CreditsTitle>
        </CreditsLi>
        <CreditsLi>
          <CreditsTitle>
            Lyricist
            <CreditsVlaue>Jamie Hartman</CreditsVlaue>
            <br />
            <CreditsVlaue>Justin Stein</CreditsVlaue>
            <br />
            <CreditsVlaue>Kyrre Gørvell-Dahll</CreditsVlaue>
            <br />
            <CreditsVlaue>Stuart Crichton</CreditsVlaue>
          </CreditsTitle>
        </CreditsLi>
        <CreditsLi>
          <CreditsTitle>
            Associated Preformer
            <CreditsVlaue>Justin Jesso</CreditsVlaue>
            <br />
            <CreditsVlaue>Kygo</CreditsVlaue>
          </CreditsTitle>
        </CreditsLi>
        <CreditsLi>
          <CreditsTitle>
            Mastering Engineer
            <CreditsVlaue>Sören von Malmborg</CreditsVlaue>
          </CreditsTitle>
          <CreditsTitle>
            Mixing Engineer
            <CreditsVlaue>BASECAMP</CreditsVlaue>
            <br />
            <CreditsVlaue>Sören von Malmborg</CreditsVlaue>
          </CreditsTitle>
        </CreditsLi>
      </CreditsTable>
    </CreditsInnerBox>
  );
};

const CreditsInnerBox = styled.div`
  margin-top: 50px;
`;
const Credits = styled.div`
  box-sizing: border-box;
  padding-left: 45px;
  color: white;
  font-size: 15px;
  font-family: "nationale-bold";
`;
const CreditsTable = styled.ul`
  width: 90%;
  margin: 30px auto;
  list-style: none;
  color: white;
  font-size: 14px;
  font-family: "natinale-regular";
`;
const CreditsLi = styled.li``;
const CreditsTitle = styled.ul`
  list-style: none;
  padding-top: 15px;
  padding-bottom: 30px;
  border-bottom: 1px solid white;
  border-color: gray;
`;
const CreditsVlaue = styled.li`
  float: right;
`;

export default CreditsBox;
