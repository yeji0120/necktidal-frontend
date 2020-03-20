import React from "react";
import Nav from "component/tidalhome/nav/Nav";
import Header from "component/tidalhome/header/Header";
import Content from "component/tidalhome/content/Content";
import TidalPlayBar from "component/tidalPlayBar/TidalPlayBar"
import {showModalAction} from 'store/Actions/index'
import {connect} from 'react-redux'
import styled, { css } from "styled-components";

const Home = ({showModal}) => {
  return (
    <div draggable="false">
      <Container>
        <Left>
          <Nav />
        </Left>
        <Right>
          <Header title={"Home"}/>
          <Content />
        </Right>
      </Container>
      {showModal && <TidalPlayBar />}
    </div>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: black;
`;

const Left = styled.div`
  width: 240px;
  height: auto;
`;

const Right = styled.div`
  width: calc(100% - 240px);
  height: 100vh;
`;

const mapStateToProps = state => {
  return {showModal: state.showModal};
}
export default connect(mapStateToProps, {}) (Home);
