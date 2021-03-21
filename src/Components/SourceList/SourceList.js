import React from 'react';
import SourceItem from '../SourceItem/SourceItem';
import './SourceList.css';

const SourceList = (props) => {
  return(
    <div className="sources">
      <h2>Sources</h2>
      <form className='check-form'>
          {props.sources.map(source => (
            <SourceItem key={source.id} source={source} {...props} />
          ))}
      </form>
      <button onClick={props.handleSelectAll}>
        Select All
      </button>
      <button onClick={props.handleSelectNone}>
        Select None
      </button>
    </div>
  );
};

export default SourceList;