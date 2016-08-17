import mongoose from 'mongoose'

class DB {
  constructor () {}
  connect () {
    mongoose.connect()
  }
  disconnect () {
    mongoose.disconnect()
  }
  checkConnection (callback) {
    this.connect()
    var db = mongoose.connection
    db.on('error' => console.log(err))
    db.on('open', () => {
      callback()
      this.disconnect()
    })
  }

  getArticles (callback) {
    this.checkConnection(() => {
      Article.find((err, articles) => {
        if (err) return callback(err)
        return callback(null, articles)
      })
    })
  }

  getArticleById (id, callback) {
    this.checkConnection(() => {
      Article.findOne({articleId: id}, (err, article) => {
        if (err) return callback(err)
        return callback(null, article)
      })
    })
  }
  getMenus (callback) {
    this.checkConnection(() => {
      Menu.find((err, menus) => {
        if (err) return callback(err)
        return callback(null, menus)
      })
    })
  }

  getMenuById (id, callback) {
    this.checkConnection(() => {
      Menu.findOne({menuId: id}, (err, menu) => {
        if (err) return callback(err)
        return callback(null, menu)
      })
    })
  }
  getOrders (callback) {
    this.checkConnection(() => {
      Article.find((err, orders) => {
        if (err) return callback(err)
        return callback(null, orders)
      })
    })
  }
  getOrderById (id, callback) {
    this.checkConnection(() => {
      Article.findOne({orderId: id}, (err, order) => {
        if (err) return callback(err)
        return callback(null, order)
      })
    })
  }
  postArticle (req, callback) {
    this.checkConnection(() => {
      let article = new Article({
        name: req.body.name,
        price: req.body.price
      })
      article.save((err, article) => {
        if (err) return callback(err)
        return callback(null, article)
      })
    })
  }

  postMenu (req, callback) {
    this.checkConnection(() => {
      let menu = new Menu({
        name: req.body.name,
        articles: req.body.articles,
      })
      menu.save((err, order) => {
        if (err) return callback(err)
        return callback(null, article)
      })
    })
  }

  postOrder (req, callback) {
    this.checkConnection(() => {
      let order = new Order({
        articles: req.body.articles,
        completed: false
      })
      order.save((err, order) => {
        if (err) return callback(err)
        return callback(null, article)
      })
    })
  }
  deleteArticles () {
    this.checkConnection(() => {
      var db = mongoose.connection
      db.dropCollection('articles')
    })
  }
  deletArticleById (id, callback) {
    this.checkConnection(() => {
      Article.findOneAndRemove({articleId: id}, (err, article) => {
        if (err) return callback(err)
        return callback(null, article)
      })
    })
  }
  deleteOrders () {
    this.checkConnection(() => {
      var db = mongoose.connection
      db.dropCollection('orders')
    })
  }
  deletOrderById (id, callback) {
    this.checkConnection(() => {
      Order.findOneAndRemove({orderId: id}, (err, order) => {
        if (err) return callback(err)
        return callback(null, order)
      })
    })
  }

  deleteMenus () {
    this.checkConnection(() => {
      var db = mongoose.connection
      db.dropCollection('menus')
    })
  }

  deletMenuById (id, callback) {
    this.checkConnection(() => {
      Order.findOneAndRemove({menuId: id}, (err, menu) => {
        if (err) return callback(err)
        return callback(null, menu)
      })
    })
  }
  putArticle () {}
  putOrder () {}
}
