import React, { Component } from 'react'
import "babel-polyfill"

class Article extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <li className='article' onClick={this.props.handleArticle.bind(this, this.props.id)}>
      <div className='articleImageContainer'>
        <img src={this.props.image}/>
      </div>
      <div className='articleDescription'>
        <h2>{this.props.name}</h2>
        <p>{this.props.price}</p>
      </div>
    </li>
  }
}

export default Article
