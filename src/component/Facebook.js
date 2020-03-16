import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';
import 'component/Facebook.css'

export default class LoginFacebook extends Component {
    state = {
        auth: false,
        name: '',
        picture: '',
        email:''
    }

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
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
                appId="804938803327633"
                autoLoad={true}
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



{/* <FacebookLoginBtn
                appId="804938803327633"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} /> */}