import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from 'component/images/mainlogo.png'


function Tidalmainnav() {
  return (
    <TidalNav>
      <Tidallogo src={Logo} alt="logo"></Tidallogo>
      <Navcollect>
        <Navhome>Home</Navhome>
        <Navfeatured>Featured</Navfeatured>
        <Navabout>About</Navabout>
      </Navcollect>
      <Navconnect>
        <Navlogin>Login</Navlogin>
        <Navtrial>Start Free Trial</Navtrial>
      </Navconnect>
      

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
`
/* 홈3가지 */
const Navcollect = styled.div`
  display:flex;
  position:relative;
  right:26%;
`

const Navhome = styled.div`
margin-right:37px;
color:#00ffff;
font-family:nationale-demibold;

  
`
const Navfeatured = styled.div`
margin-right:37px;
  
`
const Navabout = styled.div`
  
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



export default Tidalmainnav
  


