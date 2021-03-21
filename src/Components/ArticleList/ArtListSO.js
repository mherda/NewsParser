import React, { useState, useEffect } from 'react';
import stopword from 'stopword';


const TitleList = ({ articles }) => {
    const [wordList, setWordList] = useState([]);
    let word = [];
    const handleTitle = (title) => {
        const str_title = title.slice(0, title.lastIndexOf('-')-1);
        const str_title_alpha = str_title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        const new_lst = extractWords(str_title_alpha);
        word = [...word, ...new_lst];
        console.log(word);
        return str_title;
    }
    const extractWords = (txt) => {
        return stopword.removeStopwords(txt.split(' '));
    }
    return(
        <div className="articles">
            <h1>Articles</h1> 
            <ul> 
            {articles.map((article, index) => ( 
                    <li key={index}>
                        {handleTitle(article.title)}
                    </li>
                ))} 
            </ul>
            <ul>
                {word.map(w => {
                    return <li>{w}</li>
                })}
            </ul>
        </div>
    );
}

export default TitleList;
