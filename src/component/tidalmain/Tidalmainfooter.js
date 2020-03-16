import React, { Component } from 'react'
import GlobalStyles from 'component/GlobalStyles'
import styled, { keyframes } from 'styled-components';
import Tidallogo from 'component/images/mainlogo.png'
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';


function Tidalmainfooter(){
    return(
        <Mainfooter>
            <Footer>
                <Footer1>
                    <F10>Get Started</F10>
                    <F11>Download TIDAL</F11>
                    <F12>Playlist Import</F12>
                    <F13>Supported Devices</F13>
                    <F14>Get Support</F14>
                </Footer1>
                <Footer2>
                    <F20>Discover TIDAL</F20>
                    <F21>About</F21>
                    <F22>Magazine</F22>
                </Footer2>
                <Footer3>
                    <F30>Account</F30>
                    <F31>Sign Up</F31>
                    <F32>Redeem Voucher</F32>
                    <F33>Redeem Giftcard</F33>
                    <F34>Manage Account</F34>
                    <F35>Store</F35>
                </Footer3>
                <Footer4>
                    <F40>Company</F40>
                    <F41>What is TIDAL?</F41>
                    <F42>Partners</F42>
                    <F43>Careers</F43>
                    <F44>Press</F44>
                </Footer4>
                <Footer5>
                    <F50 src={Tidallogo}></F50>
                    <F51>Start Free Trial</F51>
                </Footer5>
            </Footer>
            <Bottom>
                <Bottom1>
                    <Text1>
                     TIDAL is the first global music streaming service with high fidelity sound, hi-def video quality, along with expertly curated playlists and original content — making it a trusted
                    </Text1>
                    <Text2>
                     source for music and culture.
                    </Text2>
                </Bottom1>
                <Bottom2>
                    <Instagram><AiFillInstagram size="35"/></Instagram>
                    <Facebook><AiFillFacebook size="35"/></Facebook>
                    <Twitter><AiFillTwitterSquare size="35"/></Twitter>
                </Bottom2>
            </Bottom>
            <GlobalStyles></GlobalStyles>
        </Mainfooter>
    )
}

const Mainfooter = styled.div`
width:100%;
height:750px;
background-color:black;
color:white;
font-size:20px;
`
const Footer = styled.div`
position:relative;
right:2%;
display:flex;
justify-content:center;`

const Footer1 = styled.div`
    margin-top:100px;
    margin-right:130px;
`
const Footer2 = styled.div`
    margin-top:100px;
    margin-right:130px;
`
const Footer3 = styled.div`
    margin-top:100px;
    margin-right:130px;
`
const Footer4 = styled.div`
    margin-top:100px;
    margin-right:130px;
`
const Footer5 = styled.div`
    margin-top:100px;`

const F10 = styled.div`
    margin-bottom:30px;
    color:grey;`
const F11 = styled.div`
    margin-bottom:30px;`
const F12 = styled.div`
    margin-bottom:30px;`
const F13 = styled.div`
    margin-bottom:30px;`
const F14 = styled.div``

const F20 = styled.div`
margin-bottom:30px;
color:grey;`
const F21 = styled.div`
margin-bottom:30px;`
const F22 = styled.div``

const F30 = styled.div`
margin-bottom:30px;
color:grey;`
const F31 = styled.div`
margin-bottom:30px;`
const F32 = styled.div`
margin-bottom:30px;`
const F33 = styled.div`
margin-bottom:30px;`
const F34 = styled.div`
margin-bottom:30px;`
const F35 = styled.div``

const F40 = styled.div`
margin-bottom:30px;
color:grey;`
const F41 = styled.div`
margin-bottom:30px;`
const F42 = styled.div`
margin-bottom:30px;`
const F43 = styled.div`
margin-bottom:30px;`
const F44 = styled.div``

const F50 = styled.img`
width:280px;
margin-bottom:100px;`

const F51 = styled.div`
display:flex;
justify-content:center;
align-items:center;
border: 1px solid #00FFFF;
width:300px;
height:50px;
color:#00FFFf;`



const Bottom = styled.div`
position:relative;
display:flex;
justify-content:center;
color:grey;
font-size:14px;
top:100px;`
const Bottom1 = styled.div`
position:relative;
right:80px;`
const Text1 = styled.div`
margin-bottom:15px;`
const Text2 = styled.div``

const Bottom2 = styled.div`
position:relative;
display:flex;
right:50px;
`
const Instagram = styled.div`
margin-right:40px;`
const Facebook = styled.div`
margin-right:40px;`
const Twitter = styled.div``





export default Tidalmainfooter;