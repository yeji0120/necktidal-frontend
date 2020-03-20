import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';
import { HURL } from "config.js";
import 'component/Facebook.css';
import { withRouter } from 'react-router-dom';

class LoginFacebook extends Component {
    state = {
        auth: false,
        name: '',
        picture: '',
        email:''
    }
    responseFacebook = response => {
        console.log(response);
        fetch(`${HURL}/account/social-signin`, {
            method: 'POST',
            headers: {'Authorization':response.accessToken
            }
          })
          .then(res => res.json())
        
          .then(res => {
         
            if (res.user_info.access_token) {
              this.props.history.push("/home");
              localStorage.setItem("token", res.user_info.access_token);
            } else {
             alert("실패");
            }
          });
         
       
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url,
            email: response.email
        });
    
    }
    componentClicked = () => {
        console.log('Facebook btn clicked');
    }
    
    render(){
        let facebookData;
        
        this.state.auth ? 
            facebookData = (
                <div style={{
                    position:'absolute',
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                    <h3>{this.state.email}</h3>
                </div>
            ) : 
            facebookData = (
            <FacebookLoginBtn className="Login"
                appId="2683784795077556"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );

        return(
            <>
                {facebookData}
            </>
        );
    }
}
export default withRouter(LoginFacebook)
