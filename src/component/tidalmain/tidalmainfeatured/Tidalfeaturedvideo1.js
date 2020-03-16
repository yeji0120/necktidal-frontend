import React, { Component } from 'react'
import styled, { keyframes, css} from 'styled-components';

class Tidalfeaturedvideo1 extends Component {
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
        if (scrollTop > 3050) {
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

    render() {
        return (
            <Featuredsecond>
                <Song >
                    <Album  textlineState={this.state.textlineOn} src="https://resources.tidal.com/images/84a6cca1/b484/464d/a1b6/fd288222a9d3/1280x720.jpg"></Album>
                    <Track titlelineState={this.state.titlelineOn} >
                        <Title>Car Test</Title>
                        <Artist>Jhené Aiko</Artist>
                        <StreamNow>Watch</StreamNow>
                        <StartFreeTrial>Start Free Trial</StartFreeTrial>
                    </Track>
                </Song>
            </Featuredsecond>
        )
    }
}


const fadein= keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const divrotate = keyframes `
 from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
`

const Featuredsecond = styled.div`
height:600px;
background-size:cover;
background-position:center;
background-image:url('https://tidal-cms.s3.amazonaws.com/contentBuilder/50dc6880-62eb-11ea-91c4-b9af518d18ce/cartest-jhene-bg.jpg')
`
const Song = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:-150px;
`
const Album = styled.img`
margin-top:130px;
margin-right:60px;
width:650px;
height:400px;
${props => {
        if(props.textlineState){
            return css`animation-name:${fadein};
            animation-duration: 4s;
            animation-iteration-count:linear infinite;`}}}
`
const Track = styled.div`
margin-top:100px;
color:white;
${props => {
        if(props.titlelineState){
            return css`animation-name:${fadein};
            animation-duration: 5s;
            animation-iteration-count:linear infinite;`}}}
`

const Title = styled.div`
    font-family:nationale-bold;
    font-size:43px;
    margin-bottom:20px;
`

const Artist = styled.div`
    font-size:30px;
    margin-bottom:60px;
`

const StreamNow = styled.div`
border:1px solid white;
font-size:18px;
border-radius:3px;
margin-bottom:15px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
font-family:nationale-demibold;
`

const StartFreeTrial = styled.div`
color:black;
font-size:18px;
background-color:white;
border:1px solid white;
border-radius:3px;
height:45px;
display:flex;
justify-content:center;
align-items:center;
font-family:nationale-demibold;
`


export default Tidalfeaturedvideo1
