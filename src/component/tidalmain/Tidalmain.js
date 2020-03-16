import React, { Component } from 'react'
import styled from 'styled-components'
import GlobalStyles from 'component/GlobalStyles'
import Tidalmainnav from 'component/tidalmain/tidalmainhome/Tidalmainnav'
import Tidalmainhome from 'component/tidalmain/tidalmainhome/Tidalmainhome'
import Tidalhomesecond from 'component/tidalmain/tidalmainhome/Tidalhomesecond'
import Tidalhomethird from 'component/tidalmain/tidalmainhome/Tidalhomethird'
import Tidalhomefourth from 'component/tidalmain/tidalmainhome/Tidalhomefourth'
import Tidalaboutfifth from 'component/tidalmain/tidalmainabout/Tidalaboutfifth'
import Tidalmainfooter from 'component/tidalmain/Tidalmainfooter'


function Tidalmain() {
  return (
    <Tidalmaindiv>
      <Tidalmainnav/>
      <Tidalmainhome/>
      <Tidalhomesecond/>
      <Tidalhomethird/>
      <Tidalhomefourth/>
      <Tidalmainfooter/>
    </Tidalmaindiv>
  )
}
//최상위 div
const Tidalmaindiv = styled.div`
width:100%;
overflow:hidden;

`




export default Tidalmain
  


