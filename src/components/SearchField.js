import React from 'react';

function SearchField({ updateSearchField }) {
    return (
        <div>
            <input className='searchField' type='search' placeholder='   Search' onChange={updateSearchField}></input>
        </div>
    )
}

export default SearchField