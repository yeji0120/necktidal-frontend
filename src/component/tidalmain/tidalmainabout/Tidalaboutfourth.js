import React, { Component } from 'react'
import styled, { keyframes, css} from 'styled-components';

class Tidalaboutfourth extends Component {
    state = {
        movePX:0,
        textlineOn: false,
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
        if (scrollTop > 1573) {
            console.log('in')
            this.setState({textlineOn: true})
        } else {
            console.log('out')
            this.setState({textlineOn: false})
        }
        console.log(scrollTop)
    };
    render() {
        return (
            <Aboutfourthdiv>
                <Text textlineState={this.state.textlineOn}>
                    <Textp1>Listen on your terms</Textp1>
                    <Textp2>Download your favorites with our offline feature.</Textp2>
                    <Textp3>The songs you love are always available – even</Textp3>
                    <Textp4>without WiFi or LTE.</Textp4>
                </Text>
            </Aboutfourthdiv>
        )
    }
};


export default Tidalaboutfourth

const fadein = keyframes`
  from { top: 600px; }
      to   { top: 290px; }
`;
const fadeout = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const Aboutfourthdiv = styled.div`
background-image:url('https://tidal.com/_nuxt/img/7ac2e96.jpg');
background-size:cover;
background-position:center;
height:850px;`
const Text = styled.div`
    position:relative;
    top:290px;
    left:200px;
    ${props => {
        if(props.textlineState){
            return css`animation-name: ${fadein},${fadeout};
            animation-duration: 2s;
            animation-iteration-count:linear infinite;`}}}
`
const Textp1 = styled.div`
    color:white;
    font-size:40px;
    font-family:nationale-bold;
    margin-bottom:40px;`
const Textp2 = styled.div`
    color:white;
    font-size:23px;
    margin-bottom:10px;`
const Textp3 = styled.div`
    color:white;
    font-size:23px;
    margin-bottom:10px;`
const Textp4 = styled.div`
    color:white;
    font-size:23px;`
