import React, { Component } from 'react'
import Tidalhomephone from 'component/images/tidalhomethird.png'
import styled, { keyframes, css} from 'styled-components';


class Tidalhomethird extends Component {
    state = {
        movePX:0,
        toplineOn: false,
        textlineOn: false,
    };
    //컴포넌트가 랜더링되면 window를 기준으로 스크롤 이벤트 등록
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    //컴포넌트가 화면에서 사라질 때 scroll 이벤트를 제거한다.
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = e => {
        const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
        console.log(scrollTop)
        if (scrollTop > 1070) {
            console.log('in')
            this.setState({toplineOn: true})
            this.setState({textlineOn: true})
        } else {
            console.log('out')
            this.setState({toplineOn: false})
            this.setState({textlineOn: false})
        }
    };
    render(){
        return(
            <Tidalhomediv>
            <Background>
                
            </Background>
            <Leftside >
                <Rightimage toplineState={this.state.toplineOn} src={Tidalhomephone} alt="image" ></Rightimage>
            </Leftside>
            <Rightside textlineState={this.state.textlineOn}> 
                <Text>
                    <Textp1>Hand-picked playlists</Textp1>
                </Text>
                <Descriptiontext>
                    <Description1>Stream guest playlists curated by the artists</Description1>
                    <Description2>you love. Also, check out our original playlists</Description2>
                    <Description3>hand-picked by our team of experts.</Description3>
                    <Morebutton> >  Discover TIDAL</Morebutton>
                </Descriptiontext>
            </Rightside>
            </Tidalhomediv>
            )
        }
    }
const fadeinphone = keyframes`
  from { top: 200px; }
      to   { top: -40px; }
`;
const fadeintext = keyframes`
  from { top: 200px; }
      to   { top: 100px; }
`;
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
    height:800px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #0d0d0d;
`

const Background = styled.div`
    position:absolute;
    background-size:1800px;
    background-repeat: no-repeat;
    width:1800px;
    height:700px;
    z-index:50;
    background-image: url('https://tidal.com/_nuxt/img/d1c7f65.jpg');
    
`
const Rightside = styled.div`
    position:relative;
    left:2%;
    bottom:40px;
    z-index:300;
    ${props => {
        if(props.textlineState){
            return css`animation-name: ${fadeinphone},${fadeoutphone};
            animation-duration: 2s;
            animation-iteration-count:linear infinite;`}}}
    
`
/* ${props => {props.show ? }} */
const Text = styled.div`
    color:white;
    font-size:40px;
    font-family:nationale-bold;
    margin-bottom:40px;
`
const Textp1 = styled.p`
`
const Descriptiontext = styled.div`
    color:white;
    font-size:23px;
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
    height:700px;
    width:800px;
    position:relative;
    right:5%;
    bottom:70px;
    z-index:500;
    /* ${props => {
        if(props.toplineState){
            return css`animation-name: ${fadeintext},${fadeoutphone};
            animation-duration: 3s;
            animation-iteration-count:linear infinite;`}}} */
/* 
            forwards
            animation: fadein 10s ease; 0% 20% 80% 100% */
    
    
`
const Rightimage = styled.img`
    position:relative;
    top:100px;
    z-index:500;
    width:280px;
    left:335px;
    ${props => {
        if(props.toplineState){
            return css`animation-name: ${fadeintext},${fadeoutphone};
            animation-duration: 3s;
            animation-iteration-count:linear infinite;`}}};
    

`

export default Tidalhomethird
