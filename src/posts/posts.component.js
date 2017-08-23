import React, {Component} from 'react'
import {connect} from 'react-redux';
import { initCategories } from './categories.action'

class Posts extends Component {
  componentDidMount() {
    console.log('componentDidMoount');
    this.props.initCategories();
  }

  render() {
    console.log(this.props.categories);
    return <div>
      Hello categories
      <ul>
        {this.props.categories.map((category) => {return <li key={category}>{category}</li>})}
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
    initCategories: () => dispatch(initCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
