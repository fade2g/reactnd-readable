import React, {Component} from 'react'
import {connect} from 'react-redux';
import {loadPostsWithData} from "./posts.actions";
import './posts.css';

class Posts extends Component {

  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return <div className="ui main text container">
      <h1>Dummy test title</h1>
      <ul>
        {this.props.categories && this.props.categories.map((category) => {return <li key={category.path}>{category.name}</li>})}
      </ul>
    </div>
  }
}

function mapStateToProps({categories}) {
  return {
    categories: categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => loadPostsWithData()(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
