import React from 'react';
import CardGenerator from '../containers/CardGenerator';

function PrimaryDisplay({ cocktails, setActiveCocktail }) {
    return (
        <div className='primaryDisplay'>
            {
                cocktails.map((drink) => {
                    return (
                        <CardGenerator name={drink.name} method={drink.method} key={drink.id} ingredients={drink.ingredients} image={drink.image} setActiveCocktail={setActiveCocktail} />
                    );
                })
            }
        </div>
    )
}

export default PrimaryDisplay;