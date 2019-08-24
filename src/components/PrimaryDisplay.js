import React from 'react';
import SearchField from '../components/SearchField.js';
import ExpandedCard from './ExpandedCard';
import InlineCardGenerator from './InlineCardGenerator.js';

// Could take props as argument, and destructure for clarity?

function PrimaryDisplay({ activeRecipeIDState, selectedIngredientState, searchedCocktails, displayRecipe, displayIngredient, setActiveRecipe, updateSearchField, setActiveIngredient, resetState }) {
    if (activeRecipeIDState === '' && selectedIngredientState === '') {
        return (
            <div>
                <SearchField updateSearchField={ updateSearchField } setActiveIngredient={ setActiveIngredient } />
                <InlineCardGenerator cardsToDisplay={ searchedCocktails } setActiveRecipe={ setActiveRecipe } />
            </div>
        );
    } else if (selectedIngredientState !== '') {
        return (
            <div>
                <SearchField updateSearchField={ updateSearchField } setActiveIngredient={ setActiveIngredient } />
                <InlineCardGenerator cardsToDisplay={ displayIngredient } setActiveRecipe={ setActiveRecipe } />
            </div>
        );
    } else {
        return (
            <div>
                <SearchField updateSearchField={ updateSearchField } setActiveIngredient={ setActiveIngredient } />
                <ExpandedCard displayRecipe={ displayRecipe } resetState={ resetState } />
            </div>
        );
    }

}

export default PrimaryDisplay;