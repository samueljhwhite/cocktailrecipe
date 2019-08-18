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
                    <div className='cocktailCard'>
                        <div className='cocktailCardContent'>
                            <img className='cardImg' src={this.props.image} alt='this.props.name'/>
                            <div className='cocktailCardText'>
                                <h3 onClick={this.toggleCard}>{this.props.name}</h3>
                                {
                                    this.props.ingredients.map((individualIngredient) => {
                                        return <IngredientSpan key={individualIngredient} ingredient={individualIngredient} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
            );
        }

        // Expanded recipe view - needs a unique URL
        else {
            return (
                    <div className='cocktailCard'>
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