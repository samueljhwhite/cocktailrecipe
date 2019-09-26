import React from 'react';

import Navigation from './Navigation.js';
import ExpandedCard from './ExpandedCard';
import InlineCardGenerator from './InlineCardGenerator.js';

function PrimaryDisplay(props) {
    
    const { activeRecipeIDState, selectedIngredientState } = props; //State
    const { resetState, setActiveRecipe, updateSearchField, setActiveIngredient } = props; // Functions
    const { searchedCocktails, displayRecipe, displayIngredient } = props; // Filter Results
    
    if (activeRecipeIDState === '' && selectedIngredientState === '') {
        
        return (
            <div className='primaryDisplay'>
                <Navigation 
                    updateSearchField={ updateSearchField } 
                    setActiveIngredient={ setActiveIngredient } 
                />
                <InlineCardGenerator 
                    cardsToDisplay={ searchedCocktails } 
                    setActiveRecipe={ setActiveRecipe } 
                />
            </div>
        );

    } else if (selectedIngredientState !== '') {
        
        return (
            <div className='primaryDisplay'>
                <Navigation 
                    updateSearchField={ updateSearchField } 
                    setActiveIngredient={ setActiveIngredient } 
                />
                <InlineCardGenerator 
                    cardsToDisplay={ displayIngredient } 
                    setActiveRecipe={ setActiveRecipe } 
                />
            </div>
        );

    } else {
        
        return (
            <div className='primaryDisplay'>
                <Navigation 
                    updateSearchField={ updateSearchField } 
                    setActiveIngredient={ setActiveIngredient } 
                />
                <ExpandedCard 
                    displayRecipe={ displayRecipe } 
                    resetState={ resetState } 
                />
            </div>
        );
        
    };

}

export default PrimaryDisplay;