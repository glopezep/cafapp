import React, { Component } from 'react'
import ArticleList from './ArticleList'

class Order extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log('Me he rendereado')
    return <li className='order'>
      <ArticleList articles={this.props.articles} />
    </li>
  }
}

export default Order
