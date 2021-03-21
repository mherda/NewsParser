import React, { useState, useEffect } from 'react';
import stopword from 'stopword';


const ArticleList = ({ articles, sources }) => {
    const [wordList, setWordList] = useState([]);
    const activeSources = sources.filter(source => source.active).map(item => item.name);
    const selectedArticles = articles.filter(article => activeSources.includes(article.source.name));
    let word = [];
    const handleTitle = (title) => {
        const new_lst = extractWords(str_title_alpha);
        word = [...word, ...new_lst];
        return str_title;
    }

    const sanitiseTitles = (title) => {
        // Remove the source reference 
        const strip_source = title.slice(0, title.lastIndexOf('-')-1);
        // Keep only alphanumeric characters
        const remove_punctuation = strip_source.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        return remove_punctuation;
    }

    const removePunctuation = (title) => {
        return title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    }

    const updateWordList = (wordArray) => {

    }
    const extractWords = (txt) => {
        return stopword.removeStopwords(txt.split(' '));
    }
    console.log(wordList);
    return(
        <div className="articles">
            <h1>Articles</h1> 
            <ul> 
            {selectedArticles.map((article, index) => ( 
                    <li key={index}>
                        {handleTitle(article.title)}
                    </li>
                ))} 
            </ul>
            <h2>Keywords</h2>
            <ul>
                {word.map((w, i) => {
                    return <li key={i}>{w}</li>
                })}
            </ul>
        </div>
    );
}

export default ArticleList;
