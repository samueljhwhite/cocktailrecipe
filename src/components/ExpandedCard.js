import React from 'react';
import IngredientSpan from '../components/IngredientSpan';


// function ExpandedCard({ image, name, ingredients, method }) {
//     console.log(name);
    
//     return (
//         <div>
//             <h3>{name}</h3>
//             <img src={image} alt='banahammok'/>
//         </div>
//     )
// }

// 

function ExpandedCard({ image, name, primaryIngredient, method, resetSearchAndActiveID }) {
    return (

        <div className='expandedCocktailCard'>
            <div className='cocktailCardContent'>
                <img className='cardImgLarge' src={image} alt={image} />
                <div className='cocktailCardText'>
                    <h3>{name}</h3>
                    <button onClick={resetSearchAndActiveID}>Show Less!</button>
                    <IngredientSpan primaryIngredient={primaryIngredient} />

                    <p>{method}</p>
                </div>
            </div>
        </div>

    )
}

export default ExpandedCard;




