import express, { Router } from 'express'
import db from '../db'

let router = Router()

router.get('/orders', (req, res) => {
  db.getOrders((err, orders) => {
    if (err) return err
    res.json(orders)
  })
})

router.get('/order/:id', (req, res) => {
  let id = req.params.id
  db.getOrderById(id, (err, order) => {
    if (err) return err
    res.json(order)
  })
})

router.get('/order/new', (req, res) => {
  db.postOrder(req, (err, order) => {
    if (err) return err
    re.json(order)
  })
})

export default router
