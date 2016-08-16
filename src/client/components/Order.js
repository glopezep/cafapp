import React, { Component } from 'react'
import ArticleList from './ArticleList'

class Order extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log('Me he rendereado')
    return <li className='order' onClick={this.props.sendOrder.bind(this, this.props.id)}>
      <h1>{this.props.id}</h1>
      <h1>{this.props.completed}</h1>
      <ArticleList articles={this.props.articles} />
    </li>
  }
}

export default Order
