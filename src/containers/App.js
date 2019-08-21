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
      activeRecipeID: '' // Toggled, based on clicked Card item
    }
  }

  updateSearchField = (e) => {
    this.setState({ activeRecipeID: '' });
    this.setState({ searchfield: e.target.value });
  }

  setActiveRecipe = (e) => {
    this.setState({ activeRecipeID: e.target.id });
  }

  resetSearchAndActiveID = () => {
    this.setState({ searchfield: '' });
    this.setState({ activeRecipeID: '' });
  }


  render() {
    // cocktailDB filtered by searchfield
    const searchedCocktails = this.state.cocktailDB.filter(drink => {
      return drink.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    // cocktailDB filtered by activeRecipeID
    const displayRecipe = this.state.cocktailDB.filter(drink => {
      return drink.id === Number(this.state.activeRecipeID);
    });

    return (
      <div>
        <Logo resetSearchAndActiveID={ this.resetSearchAndActiveID } />
        
        <PrimaryDisplay 
          activeRecipeIDState={ this.state.activeRecipeID }
          searchedCocktails={ searchedCocktails } 
          displayRecipe={ displayRecipe[0] } 
          setActiveRecipe={ this.setActiveRecipe }
          updateSearchField={ this.updateSearchField } 
          resetSearchAndActiveID={ this.resetSearchAndActiveID }
        />

        <div>Pretend Footer</div>
      </div>
    );
  }


}

export default App;
