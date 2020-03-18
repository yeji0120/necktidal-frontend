import React, { Component } from 'react'
import styled, { keyframes, css} from 'styled-components';


class Tidalaboutfirst extends Component {
    
    render() {
        return (
            <Aboutfirstdiv>
                <Leftside>
                    <Text>
                        <Textp1>Your favorite music.</Textp1>
                        <Textp2>Artist exclusives.</Textp2>
                        <Textp3>All on TIDAL.</Textp3>
                    </Text>
                    <Trial>
                        Start Free Trial
                    </Trial>
                    <Trialtext>
                        <Trialtextp1>Start Your 30 day trial now.</Trialtextp1>
                        <Trialtextp2>Cancel at any time.</Trialtextp2>
                    </Trialtext>
                </Leftside>
                
            </Aboutfirstdiv>
        
        )
    }
}

export default Tidalaboutfirst
const fadeintext = keyframes`
  from { top: 200px; }
      to   { bottom: 0px; }
`;
const fadeoutphone = keyframes`
  from { opacity: 0; }
      to   { opacity: 1; }
`;
const Aboutfirstdiv  = styled.div`
    position:relative;
    height:1020px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: url('https://tidal.com/_nuxt/img/892364b.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`
// #0d0d0d;

const Leftside = styled.div`
    position:relative;  
    top:60px;
    right:9%;
    font-size:23px;
    z-index:500;
    animation-name: ${fadeintext}, ${fadeoutphone};
    animation-duration: 2s;
    animation-iteration-count:linear infinite;
`
const Text = styled.div`
    color:white;
    font-size:60px;
    font-family:nationale-bold;
    margin-bottom:40px;`
const Textp1 = styled.div``
const Textp2 = styled.div``
const Textp3 = styled.div``
const Trial = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:200px;
    height:60px;
    font-size:18px;
    font-family:nationale-demibold;
    border-radius:3px;
    background-color:#00ffff;
    border-radius: .22222rem;
    margin-bottom:40px;
    position:relative;
    margin-top:75px;`
const Trialtext = styled.div`
    color:white;
    font-size:23px;`

const Trialtextp1 = styled.div`
    margin-bottom:5px;
`
const Trialtextp2 = styled.div`
`

