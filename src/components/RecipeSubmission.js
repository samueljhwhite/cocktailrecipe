import React from 'react';

function RecipeSubmission() {
    return (
        <form>
            <div>
                <span className='formTitle'>Cocktail Name</span>
                <input type='text'></input>
            </div>
            <div>
                <span className='formTitle'>Ingredients</span>
                <input type='text'></input>
            </div>
            <div>
                <span className='formTitle'>Recipe / Method</span>
                <br></br>
                <textarea></textarea>
            </div>
            <div>
                <button className='formSubmission'>Submit Cocktail</button>
            </div>
        </form>
    );
}

export default RecipeSubmission;