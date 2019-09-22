import React from 'react';

import RecipeSubmission from '../components/RecipeSubmission.js';
import RecipeSubmissionContent from '../components/RecipeSubmissionContent.js';

class NoRecipes extends React.Component {

    render() {
        return (
            <div className='noRecipe'>
                <RecipeSubmissionContent />
                <RecipeSubmission />
            </div>
        )
    }
}

export default NoRecipes