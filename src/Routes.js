import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from 'pages/Home'
import Main from 'pages/Main'
import Playlist from 'pages/Playlist'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/playlist" component={Playlist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;