import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';

function Tidalhomefourth(){
    return(
        <Fourthdiv>
            <Fourthtext>We’ll let the music speak for itself.</Fourthtext>
            <Fourthsub>Start your 30 day trial now.</Fourthsub>
            <Trial>
                 Start Free Trial
            </Trial>
        </Fourthdiv>
    )
}

const Fourthdiv = styled.div`
    background-color:#0d0d0d;
    height:350px;
`
const Fourthtext = styled.div`
    color:white;
    font-size:40px;
    font-family:nationale-bold;
    margin-bottom:40px;
    position:relative;
    left:30%;
`
const Fourthsub = styled.div`
    color:white;
    font-size:30px; 
    position:relative;
    left:38%;
    margin-top:-25px;
`
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
    left:44%;
    margin-top:60px;
`

export default Tidalhomefourth