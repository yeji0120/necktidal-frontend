import React, { Component } from 'react'
import styled, { keyframes,css } from 'styled-components';
import Tidalgrab from 'component/images/tidalgrab.png'

class Tidalaboutfifth extends Component {
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
        if (scrollTop > 2484) {
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
            <Aboutfifth>
                <Aboutfifthdiv>
                    <Image rightlineState={this.state.rightlineOn}
                     src={Tidalgrab} alt="iphone"></Image>
                    <Text leftlineState={this.state.leftlineOn}>
                        <Text1>Be our plus one</Text1>
                        <Text2>From concert livestreams to exclusive events,</Text2>
                        <Text3>TIDAL X makes sure you get access to tickets,</Text3>
                        <Text4>meet-and-greets, and behind-the-scenes</Text4>
                        <Text5>content.</Text5>
                    </Text>
                </Aboutfifthdiv>
            </Aboutfifth>
        )
    }
}
export default Tidalaboutfifth

const fadeinphone = keyframes`
  from { top: 300px; }
      to   { top: 0px; }
`;
const fadeintext = keyframes`
  from { top: 600px; }
      to   { top: 120px; }
`;
const fadeoutphone = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const Aboutfifth = styled.div`
background-image:url('https://tidal.com/_nuxt/img/feed069.jpg');
background-size:cover;
height:850px;`

const Aboutfifthdiv = styled.div`
position:relative;
top:200px;
display:flex;
justify-content:space-around`

const Image = styled.img`
    position:relative;
    left:40px;
    width:360px;
    margin-right:-500px;
    ${props => {
        if(props.rightlineState){
            return css`animation-name: ${fadeoutphone},${fadeinphone};
            animation-duration: 3s;
            animation-iteration-count:linear infinite;`}}};
`
const Text = styled.div`
position:relative;
left:120px;
top:120px;
${props => {
        if(props.leftlineState){
            return css`animation-name: ${fadeoutphone},${fadeintext};
            animation-duration: 3s;
            animation-iteration-count:linear infinite;`}}};`
const Text1 = styled.div`
    color:white;
    font-size:40px;
    font-family:nationale-bold;
    margin-bottom:40px;`
const Text2 = styled.div`
    color:white;
    font-size:23px;
    margin-bottom:10px;`
const Text3 = styled.div`
    color:white;
    font-size:23px;
    margin-bottom:10px;`
const Text4 = styled.div`
    color:white;
    font-size:23px;
    margin-bottom:10px;`
const Text5 = styled.div`
    color:white;
    font-size:23px;
    margin-bottom:10px;`

