import React, { Component } from 'react';
import styled, { keyframes,css } from 'styled-components';
import Exclusiveimg from 'component/images/exclusive.png';
import Beyonceimg from 'component/images/beyonce.png'


class Tidalaboutseventh extends Component {
    state = {
        movePX:0,
        rightlineOn: false,
        leftlineOn: false,
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
        if (scrollTop > 4100) {
            console.log('in')
            this.setState({rightlineOn: true})
            this.setState({leftlineOn: true})
        } else {
            console.log('out')
            this.setState({rightlineOn: false})
            this.setState({leftlineOn: false})
        }
        console.log(scrollTop)
    };
    render() {
        return (
            <Aboutseventh>
                <Rightside rightlineState={this.state.rightlineOn}>
                    <Text1>Exclusives</Text1>
                    <Exclusive src={Exclusiveimg}></Exclusive>
                    <Text2>Be the first to experience music and videos from your</Text2>
                    <Text3>favorite artists you can’t get anywhere else.</Text3>
                </Rightside>
                <Leftside leftlineState={this.state.leftlineOn}>
                    <Beyonce src={Beyonceimg}></Beyonce>
                </Leftside>
            </Aboutseventh>
        )
    }
}

export default Tidalaboutseventh

const fadeoutphone = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;
const fadeouttext = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const Aboutseventh = styled.div`
height:600px;
display:flex;
justify-content:space-around;
align-items:center;
background: #0d0d0d;
background-image:url('https://tidal.com/_nuxt/img/00cfdb6.png');
background-repeat:no-repeat;
background-position:center;
`
const Rightside= styled.div`
    margin-left:40px;
    color:white;
    font-size:23px;
    ${props => {
            if(props.rightlineState){
                return css`animation-name: ${fadeoutphone};
                animation-duration: 2s;
                animation-iteration-count:linear infinite;`}}};

`
const Text1 = styled.div`
    color:white;
    font-size:40px;
    font-family:nationale-bold;
    margin-bottom:40px;`

const Exclusive = styled.img`
margin-bottom:40px;`
const Text2 = styled.div`
margin-bottom:10px;`
const Text3 = styled.div``

const Leftside = styled.div`
    margin-right:50px;
    ${props => {
            if(props.leftlineState){
                return css`animation-name: ${fadeouttext};
                animation-duration: 4s;
                animation-iteration-count:linear infinite;`}}};
`
const Beyonce = styled.img`
width:550px;
`


