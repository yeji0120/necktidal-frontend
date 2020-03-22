import React, { Component } from 'react';
import { HURL } from "config.js";
import styled from 'styled-components';
import Logo from 'component/images/logoimages.png';
import { withRouter } from 'react-router-dom';

class Keeplogin extends Component {
    state={
        email:"",
        password:""
    }
    handleSave = e => {
        this.setState({
            [e.target.name]: e.target.value   
        })
    }
    goToCreateuser(){
        this.props.history.push('/createuser')
    }
    goToCreateuser(){
        this.props.history.push('/createuser')
    }
    
    handleClick = e => {
        fetch(`${HURL}/account/signup/ `, {
            method: 'POST',
            headers: {
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
          })
          .then(response => { 
            if (response.status === 404) {
                alert(" no exist id");
            } else if (response.status === 200) {
                return response
            }
          })
          .then(response => 
            console.log(response)
          )
    }

    urlQuery = ()=>{
        const queryId = this.props.location.search.split('=')[1];
        return queryId
 
     }
    render() {
        console.log(this.state)
        return (
            <Maindiv>
                <Signuporlogin>Login</Signuporlogin>
                <Ddiv>
                    <Windowdiv>
                        <Userid
                        placeholder="Enter Your Email or username"
                        value={this.urlQuery()}
                        onChange={this.handleSave}
                        name="email"></Userid>
                        <Userpassword
                        placeholder="Enter your password"
                        onChange={this.handleSave}
                        name="password"></Userpassword>
                        
                        <Continue
                        onClick={this.handleClick}>Login</Continue>
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
    cursor:pointer;
}
`
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


export default withRouter(Keeplogin);