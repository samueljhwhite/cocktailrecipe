import React from 'react';
import InlineCard from '../components/InlineCard.js';
import ExpandedCard from '../components/ExpandedCard.js';

class CardGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }

    toggleCard = () => {
        const { setActiveCocktail, name } = this.props;

        if (this.state.expanded === false) {
            setActiveCocktail(name);
        } else {
            setActiveCocktail('');
        }
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { image, name, ingredients, method, setActiveRecipe, id } = this.props;

        if (this.state.expanded === false) {
            return (
                <InlineCard image={image} name={name} ingredients={ingredients} toggleCard={this.toggleCard} setActiveRecipe={setActiveRecipe} id={id}/>
            );
        } else {
            return (
                <ExpandedCard image={image} name={name} ingredients={ingredients} method={method} toggleCard={this.toggleCard} />
            );
        }
    }

}

export default CardGenerator;