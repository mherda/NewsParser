import React, { useState, useEffect, useCallback } from 'react';
import './NewsBoard.css';
import * as S from '../../data/Sanitiser';
import SourceList from '../SourceList/SourceList';
import ArticleList from "../ArticleList/ArticleList";
import ArtFilter from "../ArtFilter/ArtFilter";


const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [myMode, setMode] = useState({
    headlinesMode: true,
    name: ['Headlines', 'Articles'],
    base: 'http://newsapi.org',
    modePath: ['/v2/top-headlines', '/v2/everything'],
    country: 'gb',
    term: '',
    category: '',
    pageSize: 100,
    domains: '?domains=',
    apiKey: '4ef167a3e3f34278a91f9b790da22a3d'
  });


  const handleEndPoint = useCallback(() => {
    const mPath = myMode.headlinesMode ? myMode.modePath[0] : myMode.modePath[1];
    const url = new URL(mPath, myMode.base);
    url.searchParams.set('pageSize', myMode.pageSize);
    if ( myMode.headlinesMode ) {
      url.searchParams.set('country', myMode.country);
    } else {
      url.searchParams.set('q', 'peace');
    }
    if ( myMode.term !== '' ) {
      url.searchParams.set('q', myMode.term);
    }
    url.searchParams.set('apiKey', myMode.apiKey);
    console.log(url.href);
    return url.href;
  }, [myMode]);

  const [queryURL, setURL] = useState(() => handleEndPoint() );


  useEffect(() => {
    // Extract news sources from articles
    const extractSources = (articles) => {
      const sourceObj = {};
      const sList = [];

      articles.forEach(article => {
          const { id, name } = article.source;
          const artID = id ? id : name.replace(/ /g, '-').toLowerCase();
          if (!sourceObj[artID]) {
            sourceObj[artID] = true;
            sList.push({ ...article.source, id: artID, active: true});
          }
        }
      )
      return sList;
    };

    fetch(queryURL)
      .then(res => res.json())
      .then(json => {
        const newArticles = json.articles;
        setArticles(newArticles);
        setSources(extractSources(newArticles));
      })
      .catch(error => console.log(error))
  }, [queryURL]);

  // Select source(s) in the sidebar
  const handleSelectSource = (id) => {
    setSources(oldSources => oldSources.map(source => {
      if(source.id === id){
        return {
          ...source,
          active: !source.active,
        }
      }else{
        return source;
      }
    }))
  };

  const handleSource = (active) => {
    setSources((oldSources) =>
      oldSources.map((source) => {
        return {
          ...source,
          active: active,
        }
      })
    )
  }
  const handleSelectAll = () => {
    return handleSource(true)
  }
  const handleSelectNone = () => {
    return handleSource(false)
  }

  // Extract selected Sources into a list (needed by filterArticles)
  const selectedArticles = (articles, sources) => {
    const sourceList = sources.filter(source => source.active).map(item => item.name);
    const artList =  articles.filter(article => sourceList.includes(article.source.name));
    return artList;
  }

  const handleMode = () => {
    const toMode = myMode.headlinesMode ? false : true;
    //const newLabel = myMode.headlinesMode ? myMode.name[1] : myMode.name[0];
    setMode(prevState => {
      return {
        ...prevState,
        headlinesMode: toMode
        //name: newLabel
      };
    });
    setURL(handleEndPoint());
  };

  const handleQuery = event => {
    event.persist();
    setMode(prevState => {
      return {
        ...prevState,
        term: event.target.value
      };
    });
  };

  const handleSubmit = event => {
    setURL(handleEndPoint());
    event.preventDefault();
  };

  const FilterProps = {
    myMode,
    handleMode,
    handleQuery,
    handleSubmit,
    queryURL
  }

  return(
    <div className="newsboard">
      <div className='app-filters'>
        <ArtFilter {...FilterProps} />
      </div>
      <div className='main-article'>

        <ArticleList
          articles={selectedArticles(articles, sources)}
          stripTitle={S.stripTitle}
        />
        <SourceList
          sources={sources}
          handleSelectSource={handleSelectSource}
          handleSelectNone={handleSelectNone}
          handleSelectAll={handleSelectAll}
        />
      </div>
    </div>
  );
};

export default NewsBoard;
