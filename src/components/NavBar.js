import React from 'react';
import Logo from './Logo';
import SearchField from './SearchField.js'
import IngredientOptions from './IngredientOptions.js'

function NavBar({ resetState, updateSearchField, setActiveIngredientNAV }) {
    return (
        <div className='navBar'>
            <Logo resetState={resetState} />
            <div className='mobileNav'>
                <SearchField updateSearchField={updateSearchField} />
                <IngredientOptions setActiveIngredientNAV={setActiveIngredientNAV} />
            </div>
        </div>
    );
}

export default NavBar;