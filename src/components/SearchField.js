import React from 'react';

function SearchField({ updateSearchField, setActiveIngredient }) {
    return (
        <div>
            <input className='searchField' type='search' placeholder='Search for a drink or an ingredient, e.g. mojito' onChange={updateSearchField}></input>
            <button id ='rum' onClick={ setActiveIngredient }>Rum</button>
        </div>
    )
}

export default SearchField