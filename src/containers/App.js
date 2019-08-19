import React from 'react';

import allCocktails from '../allCocktails.js'; //needs to be replaced by actual DB
import SearchField from '../components/SearchField.js';
import PrimaryDisplay from '../components/PrimaryDisplay';
import Logo from '../components/Logo';

import '../style.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cocktailDB: allCocktails,
      searchfield: '',
    }
  }

  updateSearchField = (e) => {
    this.setState({ searchfield: e.target.value });
  }

  setActiveCocktail = (cocktail) => {
    // needs to update the visible search field itself. 
    this.setState({ searchfield: cocktail });
  }


  render() {
    // assign appropriate recipes
    const cocktailResults = this.state.cocktailDB.filter(drink => {
      return drink.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    // render components - Logo should be own component with reset onClick
    return (
      <div>
        <Logo />
        <h1>cocktailDB.net</h1>
        <SearchField updateSearchField={this.updateSearchField} />
        <PrimaryDisplay cocktails={cocktailResults} setActiveCocktail={this.setActiveCocktail} />
      </div>
    );
  }

}

export default App;
