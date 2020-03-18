import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from 'pages/Home'
import Main from 'pages/Main'
import About from 'pages/About'
import Featured from 'pages/Featured'
import Playlist from 'pages/Playlist'
import Signup from 'pages/Signup'
import Createuser from 'pages/Createuser'
import LoginPassword from 'pages/LoginPassword'
import GlobalStyles from "component/GlobalStyles";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/playlist" component={Playlist} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/createuser" component={Createuser} />
          <Route exact path="/loginpassword" component={LoginPassword}/>
          <GlobalStyles/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;