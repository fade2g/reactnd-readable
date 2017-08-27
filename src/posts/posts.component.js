import React, {Component} from 'react'
import {connect} from 'react-redux';

class Posts extends Component {

  render() {
    return <div>
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

export default connect(mapStateToProps)(Posts);
