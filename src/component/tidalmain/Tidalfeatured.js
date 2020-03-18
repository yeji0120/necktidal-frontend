import React, { Component } from 'react'
import styled from 'styled-components'
import Tidalfeaturednav from 'component/tidalmain/tidalmainfeatured/Tidalfeaturednav'
import Tidalfeaturedfirst from 'component/tidalmain/tidalmainfeatured/Tidalfeaturedfirst'
import Tidalfeaturedmusic1 from 'component/tidalmain/tidalmainfeatured/Tidalfeaturedmusic1'
import Tidalfeaturedmusic2 from 'component/tidalmain/tidalmainfeatured/Tidalfeaturedmusic2'
import Tidalfeaturedmusic3 from 'component/tidalmain/tidalmainfeatured/Tidalfeaturedmusic3'
import Tidalfeaturedvideo1 from 'component/tidalmain/tidalmainfeatured/Tidalfeaturedvideo1'
import Tidalfeaturedvideo2 from 'component/tidalmain/tidalmainfeatured/Tidalfeaturedvideo2'
import Tidalfeaturedspecial1 from 'component/tidalmain/tidalmainfeatured/Tidalfeaturedspecial1'
import Tidalmainfooter from 'component/tidalmain/Tidalmainfooter'



class Tidalfeatured extends Component {
  render() {
    return (
        <Tidalfeatureddiv>
            <Tidalfeaturednav/>
            <Tidalfeaturedfirst/>
            <Tidalfeaturedmusic1/>
            <Tidalfeaturedvideo2/>
            <Tidalfeaturedmusic2/>
            <Tidalfeaturedmusic3/>
            <Tidalfeaturedvideo1/>
            <Tidalfeaturedspecial1/>
            <Tidalmainfooter/>
        </Tidalfeatureddiv>
    )
  }
}


export default Tidalfeatured

const Tidalfeatureddiv = styled.div`
overflow:hidden;`