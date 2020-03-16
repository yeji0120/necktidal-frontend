import React, { Component } from 'react'
import GlobalStyles from 'component/GlobalStyles'
import styled, { keyframes, css} from 'styled-components';

class Tidalfeaturedfirst extends Component {
    render() {
        return (
            <Featuredfirst>
                <Mainpicture src="https://tidal-cms.s3.amazonaws.com/contentBuilder/9646a3b0-5f47-11ea-ab5a-81287758595d/crwn-maryjblige-header.jpg"></Mainpicture>
                <MainButton>
                    <Watch>Watch Again</Watch>
                    <Start>Start Free Trial</Start>
                </MainButton>
                <GlobalStyles/>
            </Featuredfirst>
        )
    }
}

const divrotate = keyframes `
 from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
`
const divsize = keyframes `
 from {
    transform: rotate(30deg);
  }
  to {
    transform: rotate(30deg);
  }
}
`
const Featuredfirst = styled.div`
background-color:black;
height:900px;
`

const Mainpicture = styled.img`
width:900px;
margin:auto;
margin-top:100px;
margin-left:25%;
animation-name : ${divrotate};
animation-duration: 2s;
animation-iteration-count:linear infinite;
`

const MainButton = styled.div`
margin-top:50px;
display:flex;
justify-content:center;
`

const Watch = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:250px;
height:50px;
color:white;
font-size:20px;
border:1px solid white;
font-family:nationale-demibold;
margin-right:20px;
`

const Start = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:250px;
height:50px;
color:black;
font-size:20px;
border:1px solid black;
background-color:white;
font-family:nationale-demibold;
`



export default Tidalfeaturedfirst
