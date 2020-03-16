import React, { Component } from 'react'
import styled, { keyframes,css } from 'styled-components';

class Tidalhomesecond extends Component{
    state = {
        movePX:0,
        toplineOn: false,
        bottomlineOn: false,
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
        if (scrollTop > 15) {
            console.log('in')
            this.setState({toplineOn: true})
            this.setState({bottomlineOn: true})
            this.setState({textlineOn: true})
        } else {
            console.log('out')
            this.setState({toplineOn: false})
            this.setState({bottomlineOn: false})
            this.setState({textlineOn: false})
        }
    };
    render(){
        return(
            <Tidalhomediv>
      
            <Leftside textlineState={this.state.textlineOn}> 
                <Text>
                    <Textp1>The music you love</Textp1>
                </Text>
                <Descriptiontext>
                    <Description1>With over 60 million tracks and tons of</Description1>
                    <Description2>exclusive interviews and videos, TIDAL is here</Description2>
                    <Description3>to bring you closer to the artists you listen to.</Description3>
                    <Morebutton> > More Featured Content</Morebutton>
                </Descriptiontext>
            </Leftside>
            <Album>
                <Topline toplineState={this.state.toplineOn}>
                    <Top1 src="https://resources.tidal.com/images/0cbd9b8d/f910/4bc1/98e0/791f25652319/1280x1280.jpg"></Top1>
                    <Top2 src="https://resources.tidal.com/images/b983829e/0f1c/4d5e/8908/f79e786e5569/640x640.jpg"></Top2>
                    <Top3 src="https://resources.tidal.com/images/290b0808/d27a/4261/bf85/0b798325c3fb/640x640.jpg"></Top3>
                </Topline>
                <Bottomline bottomlineState={this.state.bottomlineOn}>
                    <Bottom1 src="https://resources.tidal.com/images/5faeeda8/7a89/44de/9a02/a4f05957dd30/640x640.jpg"></Bottom1>
                    <Bottom2 src="https://resources.tidal.com/images/6a0496c2/f66e/4e9e/a521/23150fae7531/1280x1280.jpg"></Bottom2>
                    <Bottom3 src="https://resources.tidal.com/images/c2441488/bcfa/44ef/bd7c/031515799a29/320x320.jpg"></Bottom3>
                </Bottomline>
            </Album>
            </Tidalhomediv>
        )
    }
}

export default Tidalhomesecond;


const fadein = keyframes`
  from { top: 200px; }
      to   { top: -30px; }
`;
const fadeout = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const Tidalhomediv = styled.div`
    height:800px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #0d0d0d;

`
//component
const Leftside = styled.div`
    position:relative;
    margin-left:-50%;
    margin-top:3%;
    ${props => {
        if(props.textlineState){
            return css`animation-name: ${fadeout};
            animation-duration: 5s;
            animation-iteration-count:linear infinite;`}}}
    
`
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
const Album = styled.div`
    width:1000px;
    height:750px;
    position:absolute;
    margin-top:30px;
    margin-left:16%;
`
const Topline = styled.div`
    position:relative;
    margin-top:100px;
    margin-left:100px;
    margin-bottom:25px;
    ${props => {
        if(props.toplineState){
            return css`animation-name: ${fadeout};
            animation-duration: 9s;
            animation-iteration-count:linear infinite;`}}}
    
`

const Top1 = styled.img`
    width:250px;;`
const Top2 = styled.img`
    margin:0px 25px 0px 25px;
    width:250px;`
const Top3 = styled.img`
    width:250px;`

const Bottomline = styled.div`
    position:relative;
    margin-left:100px;
    ${props => {
        if(props.bottomlineState){
            return css`animation-name: ${fadeout};
            animation-duration: 4s;
            animation-iteration-count:linear infinite;`}}}
`
const Bottom1 = styled.img`
    width:250px;`
const Bottom2 = styled.img`
    margin:0px 25px 0px 25px;
    width:250px;`
const Bottom3 = styled.img`
    width:250px;`


// function Tidalhomesecond() {
//  return(
//     <Tidalhomediv>
      
//       <Leftside>
//         <Text>
//             <Textp1>The music you love</Textp1>
//         </Text>
//         <Descriptiontext>
//             <Description1>With over 60 million tracks and tons of</Description1>
//             <Description2>exclusive interviews and videos, TIDAL is here</Description2>
//             <Description3>to bring you closer to the artists you listen to.</Description3>
//             <Morebutton> > More Featured Content</Morebutton>
//         </Descriptiontext>
//       </Leftside>
//       <Album>
//           <Topline>
//             <Top1 src="https://resources.tidal.com/images/0cbd9b8d/f910/4bc1/98e0/791f25652319/1280x1280.jpg"></Top1>
//             <Top2 src="https://resources.tidal.com/images/0cbd9b8d/f910/4bc1/98e0/791f25652319/1280x1280.jpg"></Top2>
//             <Top3 src="https://resources.tidal.com/images/0cbd9b8d/f910/4bc1/98e0/791f25652319/1280x1280.jpg"></Top3>
//           </Topline>
//           <Bottomline>
//             <Bottom1 src="https://resources.tidal.com/images/0cbd9b8d/f910/4bc1/98e0/791f25652319/1280x1280.jpg"></Bottom1>
//             <Bottom2 src="https://resources.tidal.com/images/0cbd9b8d/f910/4bc1/98e0/791f25652319/1280x1280.jpg"></Bottom2>
//             <Bottom3 src="https://resources.tidal.com/images/0cbd9b8d/f910/4bc1/98e0/791f25652319/1280x1280.jpg"></Bottom3>
//           </Bottomline>
//       </Album>
//       <GlobalStyles></GlobalStyles>
//     </Tidalhomediv>
//  )
// }