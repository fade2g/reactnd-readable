import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import PostsContainer from './postsContainer/postscontainer.component'
import {initCategoriesWithDataThunk} from "./categories/actions";

class App extends Component {

  componentDidMount() {
    this.props.initCategoriesThunk();
  }

  render() {
    let {menuItems} = this.props;
    return (
      <div className="App">
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <span className="item">Readable</span>
            <div className="ui simple dropdown item">
              select category
              <i className="dropdown icon" />
              <div className="menu">
                {menuItems.map((menuItem) => {
                  return <a key={menuItem.id} href="#" className="item">{menuItem.title}</a>
                })}
              </div>
            </div>
          </div>
        </div>
        <PostsContainer />
      </div>
    );
  }
}

function mapStateToProps({categories}) {
  return {
    categories: categories.categories,
    menuItems: [{id: null, title: 'All posts'}]
      .concat(categories.categories && categories.categories.map((cat) => {return {id: cat.path, title: cat.name}}))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initCategoriesThunk: () => initCategoriesWithDataThunk()(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
