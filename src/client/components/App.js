import React, { Component } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import ArticleBox from './ArticleBox'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
    this.loadArticlesFromServer = this.loadArticlesFromServer::this
  }

  componentWillMount () {
    this.loadArticlesFromServer()
  }

  async loadArticlesFromServer () {
    let articles = await fetch('/api/articles').then(response => response.json())
    this.setState({ data: articles })
  }

  render () {
    return <main className='app'>
      <AppHeader />
      <ArticleBox data={data} />
      <AppFooter />
    </main>
  }
}

export default App
