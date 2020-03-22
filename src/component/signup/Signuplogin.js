import React, { Component } from 'react';
import styled, { keyframes,css } from 'styled-components';
import { HURL } from "config.js";
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import Logo from 'component/images/logoimages.png';
import Recaptcha from 'react-recaptcha';
import { withRouter } from 'react-router-dom';
import Facebook from 'component/Facebook';

const Flogo = styled(FacebookCircle)` 
  position:relative;
  right:40%;
  color: white;
`
const Tlogo = styled(Twitter)`
  position:relative;
  right:170px;
  color: white;
`
const Recaptchadiv = styled.div`
margin-top:50px;`

class Signuplogin extends Component {
    state={
        isVerified: false,
        email:""
    };

    goToCreateuser(){
        const queryId = this.state.email
        this.props.history.push(`/createuser?keyword=${queryId}`)
    }
    goToLoginpassword(){
        const queryId = this.state.email
        this.props.history.push(`/loginpassword?keyword=${queryId}`)
    }
    
    handleClick = e => {
        fetch(`${HURL}/account/signup`, {
            method: 'POST',
            headers: {
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
          })
          .then(response => { 
            if (response.status === 400) {
                return this.goToCreateuser()
            } else if (response.status === 200) {
                return this.goToLoginpassword()
            }
          })
          .then(response => 
            console.log(response)
          )
         }
    handleSave = e => {
        this.setState({
            [e.target.name]: e.target.value   
        })
    }
    recaptchaLoaded() {
        console.log('capcha successfully loaded');
      }
    verifyCallback(response) {
        if (response) {
            this.setState({
            isVerified: true
            })
        }
    } 

    isEmail=()=> {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(this.state.email);
    }


    render() {
        console.log(this.state)
        console.log(this.isEmail())
        return (
            <Maindiv>
                <Signuporlogin>Sign Up or Log In</Signuporlogin>
                <Ddiv>
                    <Windowdiv>
                        <Userid
                        placeholder="Enter Your Email or username"
                        onChange={this.handleSave}
                        name="email"></Userid>
                        <Continue
                        textlineState={this.isEmail()}
                        onClick={this.handleClick}>Continue</Continue>
                        <Orcontinuewith>or continue with</Orcontinuewith>
                        <Facebookdiv><Flogo size="25"/><Facebook/></Facebookdiv>
                        <Twittersdiv><Tlogo size="25"/>Twitter</Twittersdiv>
                        <Recaptcha
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded}
                        verifyCallback={this.verifyCallback}
                        />
                        <Recaptchadiv></Recaptchadiv>
                    </Windowdiv>
                </Ddiv>
                <Bottom>
                    <Bottomleft>
                        <Tidallogo
                        src={Logo}></Tidallogo>
                        <Aspiro>© 2020 Aspiro AB</Aspiro>
                    </Bottomleft>
                    <Bottomright>
                        <Privacypolicy>Privacy policy</Privacypolicy>
                        <TermsandConditions>Terms and Conditions</TermsandConditions>
                        <Contact>Contact</Contact>
                        <EN>EN</EN>
                    </Bottomright>
                </Bottom>

        </Maindiv>
        )
    }
}

const Maindiv = styled.div`
text-align:center;
color:white;
width:100vw;
height:100vh;
background:linear-gradient(192deg, #171c26, #000) no-repeat center center fixed
`

const Signuporlogin = styled.div`
padding-top:30px;
padding-bottom:30px;
font-size:29px;
font-family:nationale-demibold;
`
const Ddiv = styled.div`
display:flex;
justify-content:center;`


const Windowdiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
line-height: 50px;
width:35%;
border-radius:5px;
font-size:18px;
font-family:nationale-demibold;
background:linear-gradient(to bottom, rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.03476) 19%,rgba(255,255,255,0.03082) 34%,rgba(255,255,255,0.02764) 47%,rgba(255,255,255,0.02556) 56.5%,rgba(255,255,255,0.02388) 65%,rgba(255,255,255,0.02252) 73%,rgba(255,255,255,0.0215) 80.2%,rgba(255,255,255,0.02084) 86.1%,rgba(255,255,255,0.02042) 91%,rgba(255,255,255,0.02016) 95.2%,rgba(255,255,255,0.02004) 98.2%,rgba(255,255,255,0.02) 100%)
`
const Userid = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:20px;
margin-bottom:30px;
width:70%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}
`

const Continue = styled.div`
border:1px solid #78777f;
margin-bottom:15px;
width:70%;
height:55px;
border-radius:5px;
color:#78777f;
${props => {
    if(props.textlineState === true) {
        return css`color:black;
        background:white;
        :hover{
            cursor:pointer;
        }`
    }
}}

`
/* :hover{
    color:black;
    background-color:white;
    transition: all 1s;
} */

const Orcontinuewith = styled.div`
font-size:13px;
font-family:nationale-regular;
margin-bottom:10px;`

const Facebookdiv = styled.div`
margin-bottom:30px;
width:70%;
height:55px;
border:1px solid white;
border-radius:5px;
:hover{
    color:black;
    background-color:white;
    transition: all 1s;
`

const Twittersdiv = styled.div`
width:70%;
height:55px;
border:1px solid white;
border-radius:5px;
margin-bottom:80px;
padding-left:40px;
:hover{
    color:black;
    background-color:white;
    transition: all 1s;
`


/* footer구간--------------------------- */

const Bottom = styled.div`
font-size:15px;
color:#9B9B9C;
border-top:1px solid #1F2023;
margin-left:3%;
width:94%;
display:flex;
justify-content:space-between;
position:relative;
top:28vh`
const Bottomleft = styled.div`
margin-top:30px;
display:flex;`
const Tidallogo = styled.img`
margin-left:3px;
margin-right:20px;
width:25px;`
const Aspiro = styled.div``
const Bottomright = styled.div`
margin-top:30px;
display:flex;
`
const Privacypolicy = styled.div`
margin-right:20px;`
const TermsandConditions = styled.div`
margin-right:20px;`
const Contact = styled.div`
margin-right:20px;`
const EN = styled.div`
margin-right:20px;`


export default withRouter(Signuplogin)