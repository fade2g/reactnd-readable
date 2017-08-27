import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Posts from './posts/posts.component'
import {initCategoriesWithDataThunk} from "./categories/actions";

class App extends Component {

  componentDidMount() {
    this.props.initCategoriesThunk();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Posts></Posts>
      </div>
    );
  }
}

function mapStateToProps() {
  return { }
}

function mapDispatchToProps(dispatch) {
  return {
    initCategoriesThunk: () => initCategoriesWithDataThunk()(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
