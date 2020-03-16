import React, { Component } from 'react'
import Tidalfeatured from 'component/tidalmain/Tidalfeatured'
import styled from 'styled-components'
import GlobalStyles from 'component/GlobalStyles'


class Featured extends Component {
  render() {
    return (
        <Featureddiv>
            <Tidalfeatured/>
            <GlobalStyles/>
        </Featureddiv>
    )
  }
}


export default Featured

const Featureddiv = styled.div``