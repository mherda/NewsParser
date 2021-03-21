import React from 'react';
import './SourceItem.css';

const SourceItem = (props) => {
  return(
    <label className="source-checkbox">
      {props.source.name}
    <input
      name={props.source.id}
      type="checkbox"
      checked={props.source.active}
      onChange={() => props.handleSelectSource(props.source.id)} />
  </label>
  );
};

export default SourceItem;