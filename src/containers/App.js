import React from 'react';

import allCocktailsImport from '../allCocktails.js'; //needs to be replaced by actual DB
import PrimaryDisplay from '../components/PrimaryDisplay';
import Logo from '../components/Logo';

import '../style.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cocktailDB: allCocktailsImport, // Static, does not change
      searchfield: '', // Updated based on user input into searchfield
      activeRecipeID: '', // Set based on clicked Card item
      selectedIngredient: '' //Selected from button
    }
  }

  updateSearchField = (e) => {
    this.setState({ activeRecipeID: '' });
    this.setState({ searchfield: e.target.value });
  }

  setActiveRecipe = (e) => {
    this.setState({ activeRecipeID: e.target.id });
  }

  setActiveIngredient = (e) => {
    this.setState({ selectedIngredient: e.target.id });
  }

  resetSearchAndActiveID = () => {
    this.setState({ searchfield: '' });
    this.setState({ activeRecipeID: '' });
    this.setState({ selectedIngredient: '' });
  }


  render() {
    
    const { cocktailDB, activeRecipeID, selectedIngredient, searchfield } = this.state;

    // cocktailDB filtered against searchfield
    const searchedCocktails = cocktailDB.filter(drink => {
      return drink.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // cocktailDB filtered against activeRecipeID
    const displayRecipe = cocktailDB.filter(drink => {
      return drink.id === Number(activeRecipeID);
    });

    // cocktailDB filtered against selectedIngredient
    const displayIngredient = cocktailDB.filter(drink => {
      return drink.primaryIngredient.toLowerCase().includes(selectedIngredient.toLowerCase());
    });



    return (
      <div>
        <Logo resetSearchAndActiveID={ this.resetSearchAndActiveID } />
        
        { console.log(displayIngredient) }
        
        <PrimaryDisplay 
          activeRecipeIDState={ activeRecipeID }
          selectedIngredientState={ selectedIngredient }
          searchedCocktails={ searchedCocktails } 
          displayRecipe={ displayRecipe[0] } 
          displayIngredient={ displayIngredient } 
          setActiveRecipe={ this.setActiveRecipe }
          updateSearchField={ this.updateSearchField } 
          setActiveIngredient={ this.setActiveIngredient } 
          resetSearchAndActiveID={ this.resetSearchAndActiveID }
        />

        <div>Pretend Footer</div>
      </div>
    );
  }


}

export default App;
