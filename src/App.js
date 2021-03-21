import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import NewsBoard from './Components/NewsBoard/NewsBoard';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <NewsBoard />
      </div>
    </div>
  );
}

export default App;
