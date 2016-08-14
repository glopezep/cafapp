import React, { Component } from 'react'
import ArticleList from './ArticleList'

class ArticleBox extends Component {
  render () {
    return <section className='articleBox'>
      <ArticleList />
    </section>
  }
}

export default ArticleBox
