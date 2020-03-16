import React, { Component } from 'react';
import styled from 'styled-components';
import Signuplogin from 'component/signup/Signuplogin'



class Signup extends Component {
  render() {
    return (
        <Signupdiv>
           <Signuplogin/>
        </Signupdiv>
    )
  }
}

const Signupdiv = styled.div``

export default Signup
