import React from 'react';
import SearchField from './SearchField.js';
import IngredientButtons from './IngredientButtons.js';

function Navigation({ updateSearchField, setActiveIngredient }) {
    return (
        <div className='navigation'>
            <SearchField updateSearchField={ updateSearchField } />
            <IngredientButtons setActiveIngredient={ setActiveIngredient } />
        </div>
    );
}

export default Navigation;