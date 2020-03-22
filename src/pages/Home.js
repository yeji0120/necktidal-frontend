import React from "react";
import Nav from "component/tidalhome/nav/Nav";
import Header from "component/tidalhome/header/Header";
import Content from "component/tidalhome/content/Content";
import TidalPlayBar from "component/tidalPlayBar/TidalPlayBar"
import {showModalAction} from 'store/Actions/index'
import {connect} from 'react-redux'
import styled, { css } from "styled-components";
import TidalPlayBar from "component/tidalPlayBar/TidalPlayBar";
import { ShowModal } from "store/Actions/index";
import { connect } from "react-redux";

<<<<<<< HEAD
const Home = ({ ShowModal }) => {
=======
const Home = ({showModal}) => {
>>>>>>> a69a044ce24f0fb501be996c38d29c16e3d97e50
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
<<<<<<< HEAD
      {ShowModal && <TidalPlayBar />}
=======
      {showModal && <TidalPlayBar />}
>>>>>>> a69a044ce24f0fb501be996c38d29c16e3d97e50
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
<<<<<<< HEAD
  return { ShowModal: state.ShowModal };
};
export default connect(mapStateToProps, {})(Home);
=======
  return {showModal: state.showModal};
}
export default connect(mapStateToProps, {}) (Home);
>>>>>>> a69a044ce24f0fb501be996c38d29c16e3d97e50
