import React, { Component } from 'react'
import styled, { keyframes, css} from 'styled-components';
import Masterimage from 'component/images/Master.png'
import Hifiimage from 'component/images/Hifi.png'
import Tidalaboutthirdimage from 'component/images/tidalaboutthirdimage.png'
import Goldrain from 'component/images/goldrain.mp4'


class Tidalaboutthird extends Component {
    state = {
        movePX:0,
        toplineOn: false,
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
        if (scrollTop > 750) {
            console.log('in')
            this.setState({toplineOn: true})
            this.setState({textlineOn: true})
        } else {
            console.log('out')
            this.setState({toplineOn: false})
            this.setState({textlineOn: false})
        }
        console.log(scrollTop)
    };
    render(){
        return(
            <Tidalhomediv>
                <Video muted autoPlay loop>
                    <Source src={Goldrain} type="video/mp4" ></Source>
                </Video>
                <Leftside toplineState={this.state.toplineOn}>
                    <Rightimage src={Tidalaboutthirdimage} alt="image" ></Rightimage>
                </Leftside>
                <Rightside textlineState={this.state.textlineOn}> 
                    <Text>
                        <Textp1>The highest quality audio</Textp1>
                        <Textp2>available</Textp2>
                    </Text>
                    <Property>
                        <Master src={Masterimage} alt="Master"></Master>
                        <Hifi src={Hifiimage} alt="Hifi"></Hifi>
                    </Property>
                    <Descriptiontext>
                        <Description1>No compromises. Just pure sound. With our lossless</Description1>
                        <Description2>audio experience and high-fidelity sound quality, stream</Description2>
                        <Description3>your music like you’ve never heard before.</Description3>
                        <Morebutton> >  Learn More</Morebutton>
                    </Descriptiontext>
                </Rightside>
            </Tidalhomediv>
            )
        }
    }
const fadeinphone = keyframes`
  from { bottom: 0; }
      to   { bottom: 1000px; }
`;
// const fadeintext = keyframes`
//   from { top: 200px; }
//       to   { top: -36px; }
// `;
const fadeoutphone = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;
const fadeout = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;
//최상위 div

const Tidalhomediv = styled.div`
    height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #0d0d0d;
`
const Video = styled.video`
    width:4000px;
    height:900px;
    position:relative;
    
`
const Source = styled.source`
    
`
const Rightside = styled.div`
    position:absolute;
    right:15%;
    z-index:500;
    ${props => {
        if(props.textlineState){
            return css`animation-name: ${fadeoutphone};
            animation-duration: 7s;
            animation-iteration-count:linear infinite;`}}};
    
`

const Text = styled.div`
    color:white;
    font-size:40px;
    font-family:nationale-bold;
    margin-bottom:40px;
`
const Textp1 = styled.p``
const Textp2 = styled.p``
const Descriptiontext = styled.div`
    color:white;
    font-size:23px;
`

const Property = styled.div`
margin-bottom:30px;
`
const Master = styled.img`
width:100px;
height:30px;
margin-right:20px;
`
const Hifi = styled.img`
width:60px;
height:30px;
`

const Description1 = styled.div`
    margin-bottom:5px;
`
const Description2 = styled.div`
    margin-bottom:5px;
`
const Description3 = styled.div`
`
const Morebutton = styled.div`
    font-family:nationale-demibold;
    font-size:20px;
    margin-top:40px;
`
const Leftside = styled.div`
    position:absolute;
    left:22%;
    z-index:500;
    ${props => {
        if(props.toplineState){
            return css`animation-name: ${fadeoutphone};
            animation-duration: 5s;
            animation-iteration-count:linear infinite;`}}}
    
    
`
const Rightimage = styled.img`
    position:relative;
    z-index:500;
    width:260px;
    

`

export default Tidalaboutthird




// background-image: linear-gradient(180deg,rgba(13,13,13,0) 0,rgba(13,13,13,.262) 19%,rgba(13,13,13,.459) 34%,rgba(13,13,13,.618) 47%,rgba(13,13,13,.722) 56.5%,rgba(13,13,13,.806) 65%,rgba(13,13,13,.874) 73%,rgba(13,13,13,.925) 80.2%,rgba(13,13,13,.958) 86.1%,rgba(13,13,13,.979) 91%,rgba(13,13,13,.992) 95.2%,rgba(13,13,13,.998) 98.2%,#0d0d0d);