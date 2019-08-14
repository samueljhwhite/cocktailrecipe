import React from 'react';

import allCocktails from '../allCocktails.js'; //needs to be replaced by actual DB
import SearchField from '../components/SearchField.js';
import CardArea from '../components/CardArea';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cocktailDB: allCocktails,
      searchfield: ''
    }
  }

  // State mangmt
  updateSearchField = (e) => {
    this.setState({ searchfield: e.target.value });
  }

  render() {
    // assign appropriate recipes
    const cocktailResults = this.state.cocktailDB.filter(drink => {
      return drink.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    // render components
    return (
      <div>
        <h1>Cocktail Recipes</h1>
        <SearchField updateSearchField={this.updateSearchField} />
        <CardArea cocktails={cocktailResults} />
      </div>
    );

  }

}

export default App;
