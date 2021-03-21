import React from 'react';
import './ArticleList.css';
import newsImage from '../../img/news.jpg';


const ArticleList = ({ articles, stripTitle }) => {
    
    //const activeSources = sources.filter(source => source.active).map(item => item.name);
    // const selectedArticles = articles.filter(article => activeSources.includes(article.source.name));
    console.log(articles);
    return(
        <div className="articles">
            <h1>Top Headlines</h1> 
            <div className="articleList">
            {articles.map((article, index) => {
              // Check if an article has an image url
              const imgURL = article.urlToImage ? article.urlToImage : newsImage;
              return (
              <div className="articleItem" key={index}>
                <img className="img-thumbnail" src={imgURL} alt="{article.title}"/>
                <div className="article-details">
                  <a href={article.url}>{article.title}</a>
                  <div className="article-details__bottom">
                    <span>Author: {article.author} </span>
                    <span>Source: {article.source.name}</span>
                  </div>
                </div>
              </div>
              )})}
            </div>
        </div>
    );
}

export default ArticleList;
