import React, { Component } from 'react'
import OrderList from './ArticleList'
import "babel-polyfill"

class OrderBox extends Component {
  constructor (props) {
    super(props)
    this.state = { orders: [] }
    this.loadOrdersFromServer = this.loadOrdersFromServer.bind(this)
    this.sendOrder = this.sendOrder.bind(this)
  }

  componentDidMount () {
    this.loadOrdersFromServer()
  }

  async loadOrdersFromServer () {
    let orders = await fetch('/api/orders').then(response => response.json())
    this.setState({ orders: orders })
  }

  removeOrder (id) {
    let orders = this.props.orders
    let order = oders.filter(order => order.id === id)
    var results = []

    for (i in orders) {
      if (orders[i].id !== order.id) results.push(orders[i])
      orders.splice(i, 1)
    }
    this.setState({ orders: results })
  }

  render () {
    console.log('Me he rendereado')
    return <section className='orderBox'>
      <OrderList articles={this.state.orders} sendOrder={this.sendOrder} />
    </section>
  }
}

export default OrderBox
