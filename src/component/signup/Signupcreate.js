import React, { Component } from 'react';
import { HURL } from "config.js";
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import Logo from 'component/images/logoimages.png';
import Facebook from 'component/Facebook';
import styled, { keyframes,css } from 'styled-components';
import { withRouter } from 'react-router-dom';

const Flogo = styled(FacebookCircle)` 
  position:relative;
  right:170px;
  color: white;
`
const Tlogo = styled(Twitter)`
  position:relative;
  right:183px;
  color: white;
`

class Signupcreate extends Component {
    state={
        email:"",
        password:"",
        confirm:"",
        disabled:"",
        abled:"",
        oh:false
    }
    goToHome = () =>{
        this.props.history.push('/home')
    }
    handleSave = e => {
        this.setState({
            [e.target.name]: e.target.value   
        })
    }
    handleClick = e => {
        fetch(`${HURL}/account/signup `, {
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
                return this.goToHome()
            } else if (response.status === 200) {
                return this.goToHome()
            }
          })
          .then(response => 
            console.log(response)
          )
    }
    // 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
    isPassword=()=> {
        let regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        return regex.test(this.state.password);
    }
    isPasswordconfirm=()=> {
        let regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        if(regex.test(this.state.password) === true){
            return this.isEqual()
        }
        }
    isEqual=()=>{
        if(this.state.password === this.state.confirm && this.state.oh)
            return true
    }
    urlQuery = ()=>{
       const queryId = this.props.location.search.split('=')[1];
       return queryId

    }
    checkbox = () => {
        this.setState({
            oh:!this.state.oh
        })
    }
    render() {
        console.log(this.state)
        return (
            <Maindiv>
                <Signuporlogin>Create your account</Signuporlogin>
                <Ddiv>
                    <Windowdiv>
                        <Userid
                        placeholder="Enter Your Email or username"
                        value={this.urlQuery()}
                        onChange={this.handleSave}
                        name="email"></Userid>
                        <Userpassword
                        placeholder="Create your password"
                        onChange={this.handleSave}
                        name="password"></Userpassword>
                        <Userpasswordconfirm
                        
                        placeholder="Confirm your password"
                        onChange={this.handleSave}
                        name="confirm"></Userpasswordconfirm>
                        <Selectdiv>
                            <Day
                            placeholder="Day"></Day>
                            <Month
                            placeholder="Month"></Month>
                            <Year
                            placeholder="Year"></Year>
                        </Selectdiv>
                        <Label>
                        <Input type="checkbox"
                        onClick={this.checkbox}/>
                        Stay up to date with exclusive content, new product & services, the latest information, and ticket giveaways from TIDAL.
                        </Label>
                        <Descdiv>By selecting “Sign Up” you confirm that you have read</Descdiv>
                        <Descdiv1>and agree to TIDAL's Terms of Use and Privacy policy .</Descdiv1>
                        <Continue
                        textlineState={this.isPasswordconfirm()}
                        onClick={this.handleClick}
                        >Sign Up</Continue>
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
const Descdiv = styled.div`
margin-top:15px;
font-size:13px;
font-family:nationale-regular;
line-height:28px;`

const Descdiv1 = styled.div`
font-size:13px;
font-family:nationale-regular;
line-height:28px;`



const Label = styled.label`
margin-top:30px;
width:73%;
font-family:nationale-regular;
line-height:28px;
font-size:13px;
`

const Input = styled.input``

const Selectdiv = styled.div``

const Day = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:20px;
margin-bottom:5px;
width:10%;
height:55px;
background-color:rgba(0, 0, 0, 0);
margin-right:30px;
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}`

const Month = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:20px;
margin-bottom:5px;
width:10%;
height:55px;
background-color:rgba(0, 0, 0, 0);
margin-right:30px;
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}`

const Year = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:20px;
margin-bottom:5px;
width:25%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}`



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
margin-bottom:5px;
width:70%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}
`
const Userpassword = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:20px;
margin-bottom:5px;
width:70%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}
`
const Userpasswordconfirm = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:15px;
margin-bottom:px;
width:70%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}
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


const Continue = styled.div`
border:1px solid #78777f;
margin-bottom:15px;
width:70%;
height:55px;
border-radius:5px;
color:#78777f;
margin-top:50px;
:hover{
    cursor:not-allowed;
}
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


export default withRouter(Signupcreate);





