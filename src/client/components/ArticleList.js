import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
  render () {
    return <ul className='articleList'>
      <Article/>
    </ul>
  }
}

export default ArticleList
