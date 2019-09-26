import React from 'react';

import RecipeSubmission from '../containers/RecipeSubmission.js';
import RecipeSubmissionContent from './RecipeSubmissionContent.js';

function NoRecipes() {
        return (
            <div className='noRecipe'>
                <RecipeSubmissionContent />
                <RecipeSubmission />
            </div>
        );
}

export default NoRecipes;