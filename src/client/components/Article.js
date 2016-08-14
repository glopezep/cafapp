import React, { Component } from 'react'

class Article extends Component {
  render () {
    return <li className='article'>
      <img src={this.props.image}/>
      <h2>{this.props.name}</h2>
      <p>{this.props.price}</p>
    </li>
  }
}

export default Article
