import express, { Router } from 'express'
import db from '../db'

let router = Router()

router.get('/menus', (req, res) => {
  db.getMenus((err, menus) => {
    if (err) return err
    res.json(menus)
  })
})

router.get('/menu/:id', (req, res) => {
  let id = req.params.id
  db.getMenuById(id, (err, menu) => {
    if (err) return err
    res.json(menu)
  })
})

router.get('/menu/new', (req, res) => {
  db.postMenu(req, (err, menu) => {
    if (err) return err
    re.json(menu)
  })
})

export default router
