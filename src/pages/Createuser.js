import React, { Component } from 'react';
import styled from 'styled-components';
import Signupcreate from 'component/signup/Signupcreate'



class Signup extends Component {
  render() {
    return (
        <Signupdiv>
           <Signupcreate/>
        </Signupdiv>
    )
  }
}

const Signupdiv = styled.div``

export default Signup
