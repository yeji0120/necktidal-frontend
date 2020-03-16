import React, { Component } from 'react'
import styled, { keyframes, css} from 'styled-components';
import Nav from 'component/tidalmain/tidalmainabout/Tidalaboutnav'
import Tidalaboutfirst from 'component/tidalmain/tidalmainabout/Tidalaboutfirst'
import Tidalaboutsecond from 'component/tidalmain/tidalmainabout/Tidalaboutsecond'
import Tidalaboutthird from 'component/tidalmain/tidalmainabout/Tidalaboutthird'
import Tidalaboutfourth from 'component/tidalmain/tidalmainabout/Tidalaboutfourth'
import Tidalaboutfifth from 'component/tidalmain/tidalmainabout/Tidalaboutfifth'
import Tidalaboutsixth from 'component/tidalmain/tidalmainabout/Tidalaboutsixth'
import Tidalaboutseventh from 'component/tidalmain/tidalmainabout/Tidalaboutseventh'
import Tidalhomefourth from 'component/tidalmain/tidalmainhome/Tidalhomefourth'
import Tidalmainfooter from 'component/tidalmain/Tidalmainfooter'

class Tidalabout extends Component {
    render() {
        return (
            <Tidalaboutdiv>
                <Nav/>
                <Tidalaboutfirst/>
                <Tidalaboutsecond/>
                <Tidalaboutthird/>
                <Tidalaboutfourth/>
                <Tidalaboutfifth/>
                <Tidalaboutsixth/>
                <Tidalaboutseventh/>
                <Tidalhomefourth/>
                <Tidalmainfooter/>
            </Tidalaboutdiv>
        )
    }
}

export default Tidalabout

const Tidalaboutdiv = styled.div`
width:100%;
overflow:hidden;
`
