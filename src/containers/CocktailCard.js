import React from 'react';
import IngredientSpan from '../components/IngredientSpan';

class CocktailCard extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }

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


// function CocktailCard({name, method, ingredients, toggle}) {

//     return (
// <div>
//     <div className='cocktailCard'>
//         <h3 onClick={toggle}>{name}</h3>
//         {
//             ingredients.map((individualIngredient) => {
//                 return <IngredientSpan key={individualIngredient} ingredient={individualIngredient}/>
//             })
//         }
//     </div>
// </div>
//     );
// }

export default CocktailCard;

// <p>{method}</p>