import React from 'react';

import allCocktailsImport from '../allCocktails.js'; //needs to be replaced by actual DB
import PrimaryDisplay from '../components/PrimaryDisplay';
import Logo from '../components/Logo';
import Footer from '../components/Footer.js'

// import '../style.css';
import '../App.css';

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
    this.resetState();
    this.setState({ searchfield: e.target.value });
  }

  setActiveRecipe = (e) => {
    this.resetState();
    this.setState({ activeRecipeID: e.target.id });
  }

  setActiveIngredient = (e) => {
    this.resetState();
    this.setState({ selectedIngredient: e.target.id });
  }

  resetState = () => {
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
        <Logo resetState={ this.resetState } /> 
        <PrimaryDisplay 
          activeRecipeIDState={ activeRecipeID }
          selectedIngredientState={ selectedIngredient }
          searchedCocktails={ searchedCocktails } 
          displayRecipe={ displayRecipe[0] } 
          displayIngredient={ displayIngredient } 
          setActiveRecipe={ this.setActiveRecipe }
          updateSearchField={ this.updateSearchField } 
          setActiveIngredient={ this.setActiveIngredient } 
          resetState={ this.resetState }
        />
        <Footer />
      </div>
    );

  }


}

export default App;