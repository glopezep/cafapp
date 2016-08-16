import React, { Component } from 'react'
import Order from './Order'

class OrderList extends Component {
  render () {
    return <ul className='orderList'>
      {this.props.orders.map(order) => {
        return <Order id={order.id} articles={order.articles} key={order.id} sendOrder={this.props.sendOrder}/>
      }}
    </ul>
  }
}

export default OrderList
