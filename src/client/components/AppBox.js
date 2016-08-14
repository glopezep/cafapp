import React, { Component } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import ArticleBox from './ArticleBox'
import "babel-polyfill"

class AppBox extends Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
    this.loadArticlesFromServer = this.loadArticlesFromServer.bind(this)
  }

  componentDidMount () {
    this.loadArticlesFromServer()
  }

  async loadArticlesFromServer () {
    let articles = await fetch('/api/articles').then(response => response.json())
    this.setState({ data: articles })
  }

  render () {
    return <section className='appBox'>
      <AppHeader />
      <ArticleBox data={this.state.data} />
      <AppFooter />
    </section>
  }
}

export default AppBox
