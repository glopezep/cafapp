import React, { Component } from 'react'
import OrderList from './ArticleList'

class OrderBox extends Component {
  constructor (props) {
    super(props)
    this.state = { orders: [] }
  }

  render () {
    console.log('Me he rendereado')
    return <section className='orderBox'>
      <OrderList articles={this.state.orders} />
    </section>
  }
}

export default OrderBox
