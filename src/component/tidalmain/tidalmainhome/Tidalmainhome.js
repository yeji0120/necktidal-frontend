import React, { Component } from 'react'
import Phoneimage from 'component/images/tidalhome.png'
import styled, { keyframes } from 'styled-components';


function Tidalhome() {
    
 return(
    <Tidalhomediv>
      <Background>
      </Background>
      <Tidaldiv>
          <Tidaldivtext>
            <Text000>
                <Text>
                    <Text1>All your favorite music.</Text1>
                    <Text2>Best sound quality</Text2>
                    <Text3>available.</Text3>
                </Text>
                <Start>
                    <StartFreeTrial>Start Free Trial</StartFreeTrial>
                </Start>
                <Textbottom>
                    <Tbottom1>Start your 30 day trial now.</Tbottom1>
                    <Tbottom2>Cancel at any time.</Tbottom2>
                </Textbottom>
            </Text000>
          </Tidaldivtext>
          <Tidaldivimage src={Phoneimage} alt="phone">
          </Tidaldivimage>
      </Tidaldiv>
        
    </Tidalhomediv>
 )
}

//최상위 div
const fadeinphone = keyframes`
  from { top: 500px; }
      to   { top: 120px; }
`;
const fadeintext = keyframes`
  from { top: 300px; }
      to   { top: 120px; }
`;
const fadeoutphone = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;
const fadeout = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;

const Tidalhomediv = styled.div`
    height:900px;
    background: linear-gradient(45deg,#0d0b17,#371945);
    background-size:cover;
`
const Background = styled.div`
    position:absolute;
    background-size:1400px;
    background-repeat: no-repeat;
    width:1800px;
    height:900px;
    z-index:50;
    background-image: url('https://tidal.com/_nuxt/img/c7adb22.png');
    background-position-x:420px;
    object-fit:cover;
`
const Tidaldiv = styled.div`
    display:flex;
`
const Tidaldivtext = styled.div`
    margin-top:100px;
    margin-left:220px;
`

const Text = styled.div`
    color:white;
    font-size:60px;
    font-family:nationale-bold;
    animation-name: ${fadeinphone}, ${fadeoutphone};
    animation-duration: 2s;
    animation-iteration-count:linear infinite;
`
const Text1 = styled.div``
const Text2 = styled.div``
const Text3 = styled.div``
const Start = styled.div`
`
const StartFreeTrial = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 width:200px;
 height:60px;
 font-size:18px;
 /* font-family:nationale-demibold; */
 border-radius:3px;
 background-color:#00ffff;
 border-radius: .22222rem;
 margin-top:100px;


`
    
const Textbottom = styled.div`
    margin-top:40px;
    font-size:24px;
    color:white;
`
const Tbottom1 = styled.div``
const Tbottom2 = styled.div``

const Tidaldivimage = styled.img`
    position:absolute;
    margin-top:150px;
    margin-left:65%;
    width:300px;
    z-index:500;
    animation-name: ${fadeinphone}, ${fadeoutphone};
    animation-duration: 2s;
    animation-iteration-count:linear infinite;
`
const Text000 = styled.div`
    margin-top:100px;
    animation-name: ${fadeintext}, ${fadeoutphone}; 
    animation-duration: 4s;
    animation-iteration-count:linear infinite;
`

export default Tidalhome;
 

 
/* // const Text = styled.div`
// color:white;
// font-size:60px;
// font-family:nationale-bold;`
// const Textp1 = styled.div``
// const Textp2 = styled.div``
// const Textp3 = styled.div``
// const Trial = styled.div`
// position:absolute;
// display:flex;
// justify-content:center;
// align-items:center;
// width:200px;
// height:60px;
// font-size:18px;
// font-family:nationale-demibold;
// border-radius:3px;
// background-color:#00ffff;
// border-radius: .22222rem;
// margin-bottom:40px;
// position:relative;
// margin-top:75px;`
// const Trialtext = styled.div`
// color:white;
// font-size:23px;`

// const Trialtextp1 = styled.div`
// margin-bottom:5px;
// `
// const Trialtextp2 = styled.div`
// `  */

/* animation-name: ${fadeinphone}, ${fadeoutphone};
animation-duration: 2s;
animation-iteration-count:linear infinite; */