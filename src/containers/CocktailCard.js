import React from 'react';
import IngredientSpan from '../components/IngredientSpan';

import './CocktailCard.css'

class CocktailCard extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }

    // State management functions
    toggleCard = () => {
        // setActiveCocktail function from App.js
        if (this.state.expanded === false) {
            this.props.setActiveCocktail(this.props.name);
        } else {
            this.props.setActiveCocktail('');
        }

        this.setState({ expanded: !this.state.expanded });
    }


    render() {
        // Inline card view
        if (this.state.expanded === false) {
            return (
                    <div className='cocktailCard' style={{backgroundImage: `url(${this.props.image})`}} >
                        <h3 onClick={this.toggleCard}>{this.props.name}</h3>
                        {
                            this.props.ingredients.map((individualIngredient) => {
                                return <IngredientSpan key={individualIngredient} ingredient={individualIngredient} />
                            })
                        }
                    </div>
            );
        }

        // Expanded recipe view - needs a unique URL
        else {
            return (
                    <div className='cocktailCard' style={{backgroundImage: `url(${this.props.image})`}} >
                        <h3 onClick={this.toggleCard}>{this.props.name}</h3>
                        <button onClick={this.toggleCard}>Show Less!</button>
                        {
                            this.props.ingredients.map((individualIngredient) => {
                                return <IngredientSpan key={individualIngredient} ingredient={individualIngredient} />
                            })
                        }
                        <p>{this.props.method}</p>
                    </div>
            );
        }

    }

}

export default CocktailCard;