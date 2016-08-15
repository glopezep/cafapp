import React, { Component } from 'react'
import Order from './Order'

class OrderList extends Component {
  render () {
    return <ul className='orderList'>
      {this.props.orders.map(order) => {
        return <Order />
      }}
    </ul>
  }
}

export default OrderList
