import React from 'react';
import SearchField from '../components/SearchField.js';
import CardGenerator from '../containers/CardGenerator';
import ExpandedCard from './ExpandedCard';

// NOTES FOR NEXT TIME
// CARD GENERATOR COULD JUST TAKE THE DRINK/SEARCHEDCOCKTAILS VAR, AND DESTRUCTURE LATER
// OBVIOUSLY, SAME FOR EXPANDED CARD

// OBJECTIVE !---!---! CLEAN CODE, AND DISTRIBUTE HEAVY LIFTING


function PrimaryDisplay({ activeRecipeIDState, searchedCocktails, displayRecipe, setActiveRecipe, updateSearchField, resetSearchAndActiveID }) {
    if (activeRecipeIDState === '') {
        return (
            <div>
                <SearchField updateSearchField={ updateSearchField } />
                <div className='primaryDisplay'>
                        {
                            searchedCocktails.map((drink) => {
                                return (
                                    <CardGenerator 
                                        name={drink.name} 
                                        method={drink.method} 
                                        key={drink.id} 
                                        id={drink.id} 
                                        ingredients={drink.ingredients} 
                                        image={drink.image} 
                                        setActiveRecipe={setActiveRecipe} 
                                    />
                                );
                            })
                        }
                </div>
            </div>
        );
    } else {
        return (
            <div>
            <SearchField updateSearchField={ updateSearchField } />
            <ExpandedCard 
                image={displayRecipe.image} 
                name={displayRecipe.name} 
                ingredients={displayRecipe.ingredients} 
                method={displayRecipe.method} 
                resetSearchAndActiveID={ resetSearchAndActiveID }
            />
            </div>
        );
    }
}




// class PrimaryDisplay extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             searchfield: '',
//             activeRecipeID: ''
//         }
//     }



    

//     render() {

        
//         const { searchedCocktails, setActiveCocktail, displayRecipe } = this.props;



//         if (this.state.activeRecipeID === '') {
//             return (
//                 <div>
//                     <SearchField updateSearchField={this.updateSearchField} />
//                     <div className='primaryDisplay'>
//                         {
//                             searchedCocktails.map((drink) => {
//                                 return (
//                                     <CardGenerator name={drink.name} method={drink.method} key={drink.id} id={drink.id} ingredients={drink.ingredients} image={drink.image} setActiveCocktail={setActiveCocktail} setActiveRecipe={this.setActiveRecipe} />
//                                 );
//                             })
//                         }
//                     </div>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <ExpandedCard image={displayRecipe[0].image} name={displayRecipe[0].name} ingredients={displayRecipe[0].ingredients} method={displayRecipe[0].method} />
//                 </div>
//             )
//         }

//     }
// }











// function PrimaryDisplay({ cocktails, setActiveCocktail }) {
//     return (
//         <div className='primaryDisplay'>
//             {
//                 cocktails.map((drink) => {
//                     return (
//                         <CardGenerator name={drink.name} method={drink.method} key={drink.id} ingredients={drink.ingredients} image={drink.image} setActiveCocktail={setActiveCocktail} />
//                     );
//                 })
//             }
//         </div>
//     )
// }

export default PrimaryDisplay;