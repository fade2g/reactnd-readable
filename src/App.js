import React, { Component } from 'react';
import './App.css';
import PostsContainer from './postsContainer/postscontainer.component'
import {Route, withRouter} from "react-router-dom";
import ReadableHeader from './header/header.component';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ReadableHeader />
        <Route path="/:category" component={PostsContainer} />
        <Route exact path="/" component={PostsContainer} />
      </div>
    );
  }
}

export default withRouter(App);
