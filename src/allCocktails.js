// import ginAndTonic from './images/ginandtonic.jpg';
import placeholder from './images/placeholder 4 150 300.jpg';
import mojitoLarge from './images/mojitoLarge.jpg';
import ginAndTonicLarge from './images/ginAndTonicLarge.jpg';

const allCocktails = [
    {
        id: 1,
        name: 'Gin and Tonic',
        primaryIngredient:  'Gin',
        image: placeholder,
        equipment: ['Spoon', 'Glass'],
        ingredients: ['1 part Bombay Sapphire gin', '2 parts Premium Tonic Water', 'To garnish: Lime or lemon wedge'],
        recipe: ['Add the ice to your glass and squeeze in the juice of a lime wedge. Run the lime wedge around the rim of the glass', 'Add the gin and tonic', 'Stir gently'],
        largeImg: ginAndTonicLarge
    },
    {
        id: 2,
        name: 'Mojito',
        primaryIngredient:  'Rum',
        image: placeholder,
        equipment: ['A muddler (or a rolling pin)', 'Spoon', 'Long glass'],
        ingredients: ['2 parts Bacardi Carta Blanca', 'Half of a fresh lime', 'Fresh mint leaves', '2 heaped spoons of caster sugar', 'A dash of soda water', 'Cubed ice', 'Crushed ice', 'To Garnish: Sprig of fresh mint'],
        recipe: ['Put the four lime wedges into a glass, then add the sugar and muddle (squish everything together) to release the lime juice', 'Put the mint leaves on one hand and clap. This bruises the leaves and releases the aroma. Rub the mint leaves around the rim of the glass and drop them in. Use a muddler, bar spoon (or even a rolling pin) to gently push the mint down into the lime juice', 'Half fill the glass with crushed ice and pour in the Bacardi Carta Blanca. Stir the mix together until the sugar dissolves', 'Top up with crushed ice, a splash of the soda water and garnish it with a sprig of mint'],
        largeImg: mojitoLarge
    },
    {
        id: 3,
        name: 'Pina Colada',
        primaryIngredient:  'Rum',
        image: placeholder,
        equipment: ['Sling glass', 'Cocktail shaker', 'Blender'],
        ingredients: ['6-7 chunks of pineapple', '1 teaspoon of sugar', '1 tablespoon of coconut cream', '50ml Bacardi Carta Blanco', '50ml fresh pineapple juice', 'Ice', 'To Garnish: A pineapple triangle'],
        recipe: ['Place all your ingredients into the blender (apart from the garnish!) and blend until a smooth consistency', 'Pour into a chilled (or even better, frozen) glass, then add your garnish and serve'],
        largeImg: mojitoLarge
    },
    {
        id: 4,
        name: 'Margarita',
        primaryIngredient: 'Tequila',
        image: placeholder,
        equipment: ['A shaker', 'A strainer', 'A sieve', 'Cocktail glass'],
        ingredients: ['1 part Cazadores Tequila', '½ part triple sec liqueur', '½ part lime juice', '1 lime wedge', 'Salt', 'Cubed ice'],
        recipe: ['Chill your glass (the easiest way is to fill it with ice)', 'Put lots of ice and all of the ingredients into a shaker, then shake hard for about 30 seconds to chill the liquid really well', 'Run a lime wedge around the outside of the rim of your glass before rolling the rim in salt', 'Double strain the mix into the glass'],
        largeImg: mojitoLarge
    },
    {
        id: 5,
        name: 'Whiskey Sour',
        primaryIngredient: 'Bourbon Whisky',
        image: placeholder,
        equipment: ['A shaker', 'A strainer', 'Short glass'],
        ingredients: ['2 parts bourbon', '1 part lemon juice', '½ part sugar syrup', '½ part egg white', 'Cubed ice', 'To garnish: 1 cherry and an orange slice'],
        recipe: ['Put ice and all of the ingredients into a shaker and shake hard for about 20 seconds to chill the liquid really well', 'Strain the mix into a glass filled with ice and garnish with the cherry and orange slice'],
        largeImg: mojitoLarge
    },
    {
        id: 6,
        name: 'Hot Toddy',
        primaryIngredient: 'Whisky',
        image: placeholder,
        equipment: ['A short glass'],
        ingredients: ['1 ½ parts Whisky', '1/3 part honey syrup', '3 parts hot water', '3 dried cloves, per glass', 'freshly squeezed lemon juice, plus a slice of lemon to garnish each glass', 'cinnamon stic​ks, to garnish each glass'],
        recipe: ['Combine the whisky, honey syrup, hot water and cloves in a toddy glass and stir gently until completely combined. Squeeze in lemon juice, to taste. Remove the cloves, then garnish with a slice of lemon and cinnamon stick.'],
        largeImg: mojitoLarge
    },
    {
        id: 7,
        name: 'Treacle Cocktail',
        primaryIngredient: 'Rum',
        image: placeholder,
        equipment: ['A short glass'],
        ingredients: ['Teaspoon of sugar syrup (mix 2 parts sugar to 1 part water)', '3 dashes orange bitters', '2 parts Bacardi 8 Year Old Rum', '1 part cloudy apple juice', 'Orange twist, to garnish'],
        recipe: ['Put the sugar syrup and bitters into a rocks glass. Add 2 cubes of ice and about 10ml of the Bacardi 8. Stir well. Add more ice and the remainder of the rum and stir again. Pour in the apple juice and gently stir. Garnish with a twist of orange peel.'],
        largeImg: mojitoLarge
    },
    {
        id: 8,
        name: 'Prosecco Cocktail',
        primaryIngredient: 'Bitters',
        image: placeholder,
        equipment: ['A tall glass'],
        ingredients: ['1 sugar cube (or ½ teaspoon sugar)', '4 dashes of Angostura Bitters', '1 part Cognac', 'Top with Martini Prosecco'],
        recipe: ['Add the sugar, bitters and cognac to a Champagne flute. Carefully top up with Martini Prosecco.'],
        largeImg: mojitoLarge
    },
    {
        id: 9,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 10,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 11,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 12,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 13,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 14,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 15,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 16,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    },
    {
        id: 17,
        name: 'Inspiration is a constant.',
        primaryIngredient: 'ennobling',
        image: placeholder
    }
];

export default allCocktails;