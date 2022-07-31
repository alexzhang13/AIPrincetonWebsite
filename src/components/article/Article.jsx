import React from 'react'
import './article.css'

const Article = ({ imgUrl }) => {
  return (
    <div className="site__blog-container_article">
      <div className="site__blog-container_article-img">
        <img src={imgUrl} alt="article image"> </img>
      </div>
    </div>
  )
}

export default Article