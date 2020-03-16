import React, { Component } from 'react'
import styled, { keyframes, css} from 'styled-components';

class Tidalfeaturedspecial1 extends Component {
    state = {
        movePX:0,
        textlineOn: false,
        titlelineOn: false
    };
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = e => {
        const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
        console.log(scrollTop)
        if (scrollTop > 3600) {
            console.log('in')
            this.setState({textlineOn: true})
            this.setState({titlelineOn: true})
        } else {
            console.log('out')
            this.setState({textlineOn: false})
            this.setState({titlelineOn: true})
        }
        console.log(scrollTop)
    };

    render(){
        return(
            <Special1>
                <Main titlelineState={this.state.titlelineOn}>
                    <Maindiv src="https://tidal-cms.s3.amazonaws.com/contentBuilder/a108c460-49fd-11e8-b1c4-27509aef5fdf/lemonade-logo.3a9a385c.png">
                    </Maindiv>
                    <Stream>
                        Stream
                    </Stream>
                </Main>
            </Special1>
        )
    }
}

const fadein = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const Special1 = styled.div`
height:900px;
background-size:cover;
background-position-y:-60px;
background-image:url('https://tidal-cms.s3.amazonaws.com/contentBuilder/751d2d00-49fd-11e8-b1c4-27509aef5fdf/beyonce-lemonade-frame.671a97d5.jpg');`

const Main = styled.div`
padding-top:130px;
text-align:center;
${props => {
        if(props.titlelineState){
            return css`animation-name: ${fadein};
            animation-duration: 10s;
            animation-iteration-count:linear infinite;`}}}`

const Maindiv = styled.img`
width:550px;
`

const Stream = styled.div`
margin-left:45%;
display:flex;
justify-content:center;
align-items:center;
color:black;
border-radius:3px;
width:13%;
height:45px;
background-color:white;
font-size:20px;
margin-top:550px;
border:1px solid white;
font-family:nationale-demibold;
`


export default Tidalfeaturedspecial1