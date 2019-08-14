import React from 'react';

function SearchField({ updateSearchField }) {
    return (
        <input type='search' placeholder='Search for a drink or an ingredient, e.g. mojito' onChange={updateSearchField}></input>
    )
}

export default SearchField