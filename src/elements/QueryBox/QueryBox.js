import React from 'react';

const QueryBox = props => {
    return (
      <>
        <label htmlFor="sQuery">Search</label>
        <input
          type="text"
          id="sQuery"
          name="query"
          value={props.term}
          onChange={props.handleQuery}
          placeholder="Optional Search Query"
        />
      </>
    );
  };

  export default QueryBox;