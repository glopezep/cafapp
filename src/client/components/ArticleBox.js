import React, { Component } from 'react'
import ArticleList from './ArticleList'
import "babel-polyfill"

class ArticleBox extends Component {
  constructor (props) {
    super(props)
    this.state = { articles: [] }
    this.loadArticlesFromServer = this.loadArticlesFromServer.bind(this)
  }

  componentDidMount () {
    this.loadArticlesFromServer()
  }

  async loadArticlesFromServer () {
    let articles = await fetch('/api/articles').then(response => response.json())
    this.setState({ articles: articles })
  }

  render () {
    return <section className='articleBox'>
      <ArticleList articles={this.state.articles} handleArticle={this.props.handleArticle}/>
    </section>
  }
}

export default ArticleBox
