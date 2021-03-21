import React from 'react';
import Button from '../../elements/button/Button';
import QueryBox from '../../elements/QueryBox/QueryBox';

const ArtFilter = (props) => {
    const { handleSubmit, handleMode, handleQuery, myMode } = props;
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <Button myMode={myMode} handleChange={handleMode} />
            {myMode.headlinesMode && 
                <>
                <h2>Search the query</h2>
                </>
            }
            <>
                <QueryBox myMode={myMode} handleQuery={handleQuery} />
                <Button
                    myMode={myMode}
                    name="Submit"
                    type="submit"
                    handleChange={handleSubmit}
                />
            </>
      </form>
        </>
    );

};

export default ArtFilter;