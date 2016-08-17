import express, { Router } from 'express'
import db from '../db'

let router = Router()

router.get('/articles', (req, res) => {
  db.getArticles((err, articles) => {
    if (err) return err
    res.json(articles)
  })
})

router.get('/article/:id', (req, res) => {
  let id = req.params.id
  db.getArticleById(id, (err, article) => {
    if (err) return err
    res.json(article)
  })
})

router.get('/article/new', (req, res) => {
  db.postArticle(req, (err, article) => {
    if (err) return err
    re.json(article)
  })
})

export default router
