import React, { Component } from 'react'
import styled, { keyframes,css } from 'styled-components';
import Mymiximg from 'component/images/mymiximg.png';
import Mymixiphone from 'component/images/mymixiphone.png'

class Tidalaboutsixth extends Component {
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
        if (scrollTop > 3205) {
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
                    <Image leftlineState={this.state.leftlineOn}
                     src={Mymixiphone} alt="iphone"></Image>
                    <Text rightlineState={this.state.rightlineOn}>
                        <Mymix src={Mymiximg} alt="mymix"></Mymix>
                        <Text2>A personalized mix of songs based on your</Text2>
                        <Text3>listening history — letting you enjoy more of</Text3>
                        <Text4>the music you love.</Text4>
                        <Text5> > Learn More</Text5>
                    </Text>
                </Aboutfifthdiv>
            </Aboutfifth>
        )
    }
}
export default Tidalaboutsixth

const fadeinphone = keyframes`
  from { top: 00px; }
      to   { top: -90px; }
`;
const fadeintext = keyframes`
  from { top: 400px; }
      to   { top: 120px; }
`;
const fadeoutphone = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const Aboutfifth = styled.div`
background-image:url('https://tidal.com/_nuxt/img/c8165ea.png');
background-color:#0d0d0d;
background-size:600px;
background-position:300px 200px;
background-repeat:no-repeat;
height:850px;`

const Aboutfifthdiv = styled.div`
position:relative;
top:200px;
display:flex;
justify-content:space-around`

const Image = styled.img`
    position:relative;
    top:-90px;
    left:40px;
    width:360px;
    margin-right:-500px;
    ${props => {
        if(props.leftlineState){
            return css`animation-name: ${fadeoutphone},${fadeinphone};
            animation-duration: 4s;
            animation-iteration-count:linear infinite;`}}};
`
const Text = styled.div`
position:relative;
left:120px;
top:120px;
${props => {
        if(props.rightlineState){
            return css`animation-name: ${fadeoutphone},${fadeintext};
            animation-duration: 3s;
            animation-iteration-count:linear infinite;`}}};
`
const Mymix = styled.img`
    width:280px;
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
    font-family:nationale-bold;
    font-size:20px;
    margin-top:30px;`

