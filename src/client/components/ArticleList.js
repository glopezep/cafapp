import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
  render () {
    return <ul className='articleList'>
      {this.props.articles.map(article => {
        return <Article name={article.name} price={article.price} image={article.image} key={article.id} id={article.idNuevo} handleArticle={this.props.handleArticle} />
      })}
    </ul>
  }
}

export default ArticleList
