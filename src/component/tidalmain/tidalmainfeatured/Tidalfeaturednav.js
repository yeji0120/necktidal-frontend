import React, { Component } from 'react'
import styled from 'styled-components'
import GlobalStyles from 'component/GlobalStyles'
import Logo from 'component/images/mainlogo.png'
import { useHistory } from "react-router-dom";


const Tidalfeaturednav=()=> {
  let history = useHistory();
  return (
    <TidalNav>
      <Tidallogo onClick={()=>history.push("/")} src={Logo} alt="logo"></Tidallogo>
      <Navcollect>
        <Navhome
        onClick={()=>history.push("/")}>Home</Navhome>
        <Navfeatured
        onClick={()=>history.push("/featured")}>Featured</Navfeatured>
        <Navabout
        onClick={()=>history.push("/about")}>About</Navabout>
      </Navcollect>
      <Navconnect>
        <Navlogin
        onClick={()=>history.push("/signup")}>Login</Navlogin>
        <Navtrial>Start Free Trial</Navtrial>
      </Navconnect>
      

      <GlobalStyles></GlobalStyles>
    </TidalNav>
  )
}
// 상위태그
const TidalNav = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:black;
  color:white;
  width:100%;
  height:120px;
  font-size:20px;
`
/* 로고 */
const Tidallogo = styled.img`
  position:relative;
  width:145px;
  height:20px;
  right:29%;
  margin-left:30px;
  :hover{
  cursor: pointer;
}
`
/* 홈3가지 */
const Navcollect = styled.div`
  display:flex;
  position:relative;
  right:26%;
`

const Navhome = styled.div`
margin-right:37px;
:hover{
  cursor:pointer;
  color:#00ffff;
}

  
`
const Navfeatured = styled.div`
margin-right:37px;
color:#00ffff;
font-family:nationale-demibold;
:hover{
  cursor: pointer;
}
  
`
const Navabout = styled.div`
:hover{
  cursor:pointer;
  color:#00ffff;
}

  
`
/* 로그인,트라이얼 */
const Navconnect = styled.div`
display:flex;
position:relative;
left:28%;
`
const Navlogin = styled.div`
  position:relative;
  margin-right:10px;
  top:13px;
  :hover{
    cursor:pointer;
  }
`
const Navtrial = styled.div`
  width:185px;
  height:47px;
  border:1px solid #00ffff;
  border-radius:4px;
  color:#00ffff;
  font-family:nationale-demibold;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:10px;
  font-size:17px;

`



export default Tidalfeaturednav
  


