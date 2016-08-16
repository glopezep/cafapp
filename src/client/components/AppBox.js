import React, { Component } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import ArticleBox from './ArticleBox'
import OrderBox from './OrderBox'

class AppBox extends Component {
  constructor (props) {
    super(props)
    this.state = { articles: [] }
    this.handleArticle = this.handleArticle.bind(this)
  }

  handleArticle (article) {
    var articles = this.state.articles
    articles.push(article)
    this.setState({ articles: articles })
  }

  render () {
    return <section className='appBox'>
      <AppHeader />
      <ArticleBox handleArticle={this.handleArticle} />
      <OrderBox />
      <AppFooter />
    </section>
  }
}

export default AppBox
