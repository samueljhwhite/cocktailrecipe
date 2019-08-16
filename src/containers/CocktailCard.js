import React from 'react';
import IngredientSpan from '../components/IngredientSpan';

class CocktailCard extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }

    // State management functions
    toggleCard = () => {
        this.setState({ expanded: !this.state.expanded });
    }


    render() {
        // Inline card view
        if (this.state.expanded === false) {
            return (
                <div>
                    <div className='cocktailCard'>
                        <h3 onClick={this.toggleCard}>{this.props.name}</h3>
                        {
                            this.props.ingredients.map((individualIngredient) => {
                                return <IngredientSpan key={individualIngredient} ingredient={individualIngredient} />
                            })
                        }
                    </div>
                </div>
            )
        }

        // Expanded recipe view - needs a unique URL
        else {
            return (
                <div>
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
                </div>
            )
        }

    }

}

export default CocktailCard;