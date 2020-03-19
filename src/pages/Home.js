import React from "react";
import Nav from "component/tidalhome/nav/Nav";
import Header from "component/tidalhome/header/Header";
import Content from "component/tidalhome/content/Content";
import styled, { css } from "styled-components";
import TidalPlayBar from "component/tidalPlayBar/TidalPlayBar";
import { ShowModal } from "store/Actions/index";
import { connect } from "react-redux";

const Home = ({ ShowModal }) => {
  return (
    <div draggable="false">
      <Container>
        <Left>
          <Nav />
        </Left>
        <Right>
          <Header title={"Home"} />
          <Content />
        </Right>
      </Container>
      {ShowModal && <TidalPlayBar />}
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
  return { ShowModal: state.ShowModal };
};
export default connect(mapStateToProps, {})(Home);
