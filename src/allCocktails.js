import ginAndTonicSmall from './images/ginAndTonicSmall.jpg';
import ginAndTonicLarge from './images/ginAndTonicLarge.jpg';
import mojitoSmall from './images/mojitoSmall.jpg';
import mojitoLarge from './images/mojitoLarge.jpg';
import pinaColadaSmall from './images/pinaColadaSmall.jpg';
import pinaColadaLarge from './images/pinaColadaLarge.jpg';
import margaritaSmall from './images/margaritaSmall.jpg';
import margaritaLarge from './images/margaritaLarge.jpg';
import whiskySourSmall from './images/whiskySourSmall.jpg';
import whiskySourLarge from './images/whiskySourLarge.jpg';
import hotToddySmall from './images/hotToddySmall.jpg';
import hotToddyLarge from './images/hotToddyLarge.jpg';
import treacleCocktailSmall from './images/treacleCocktailSmall.jpg';
import treacleCocktailLarge from './images/treacleCocktailLarge.jpg';
import proseccoCocktailSmall from './images/proseccoCocktailSmall.jpg';
import proseccoCocktailLarge from './images/proseccoCocktailLarge.jpg';
import maryPitchforkSmall from './images/maryPitchforkSmall.jpg';
import maryPitchforkLarge from './images/maryPitchforkLarge.jpg';
import vanillaPearDrop from './images/vanillaPearDrop.jpg';
import vanillaPearDropLarge from './images/vanillaPearDropLarge.jpg';
import bloodOrangeMimosa from './images/bloodOrangeMimosa.jpg';
import bloodOrangeMimosaLarge from './images/bloodOrangeMimosaLarge.jpg';
import rossiniSmall from './images/rossiniSmall.jpg';
import rossiniLarge from './images/rossiniLarge.jpg';
import americanaSmall from './images/americanaSmall.jpg';
import americanaLarge from './images/americanaLarge.jpg'
import cosmopolitanSmall from './images/cosmopolitanSmall.jpg';
import cosmopolitanLarge from './images/CosmopolitanLarge.jpg'

const allCocktails = [
    {
        id: 1,
        name: 'Gin and Tonic',
        primaryIngredient:  'Gin',
        image: ginAndTonicSmall,
        equipment: ['Spoon', 'Glass'],
        ingredients: ['1 part Bombay Sapphire gin', '2 parts Premium Tonic Water', 'To garnish: Lime or lemon wedge'],
        recipe: ['Add the ice to your glass and squeeze in the juice of a lime wedge. Run the lime wedge around the rim of the glass', 'Add the gin and tonic', 'Stir gently'],
        largeImg: ginAndTonicLarge
    },
    {
        id: 2,
        name: 'Mojito',
        primaryIngredient:  'Rum',
        image: mojitoSmall,
        equipment: ['A muddler (or a rolling pin)', 'Spoon', 'Long glass'],
        ingredients: ['2 parts Bacardi Carta Blanca', 'Half of a fresh lime', 'Fresh mint leaves', '2 heaped spoons of caster sugar', 'A dash of soda water', 'Cubed ice', 'Crushed ice', 'To Garnish: Sprig of fresh mint'],
        recipe: ['Put the four lime wedges into a glass, then add the sugar and muddle (squish everything together) to release the lime juice', 'Put the mint leaves on one hand and clap. This bruises the leaves and releases the aroma. Rub the mint leaves around the rim of the glass and drop them in. Use a muddler, bar spoon (or even a rolling pin) to gently push the mint down into the lime juice', 'Half fill the glass with crushed ice and pour in the Bacardi Carta Blanca. Stir the mix together until the sugar dissolves', 'Top up with crushed ice, a splash of the soda water and garnish it with a sprig of mint'],
        largeImg: mojitoLarge
    },
    {
        id: 3,
        name: 'Pina Colada',
        primaryIngredient:  'Rum',
        image: pinaColadaSmall,
        equipment: ['Sling glass', 'Cocktail shaker', 'Blender'],
        ingredients: ['6-7 chunks of pineapple', '1 teaspoon of sugar', '1 tablespoon of coconut cream', '50ml Bacardi Carta Blanco', '50ml fresh pineapple juice', 'Ice', 'To Garnish: A pineapple triangle'],
        recipe: ['Place all your ingredients into the blender (apart from the garnish!) and blend until a smooth consistency', 'Pour into a chilled (or even better, frozen) glass, then add your garnish and serve'],
        largeImg: pinaColadaLarge
    },
    {
        id: 4,
        name: 'Margarita',
        primaryIngredient: 'Tequila',
        image: margaritaSmall,
        equipment: ['A shaker', 'A strainer', 'A sieve', 'Cocktail glass'],
        ingredients: ['1 part Cazadores Tequila', '½ part triple sec liqueur', '½ part lime juice', '1 lime wedge', 'Salt', 'Cubed ice'],
        recipe: ['Chill your glass (the easiest way is to fill it with ice)', 'Put lots of ice and all of the ingredients into a shaker, then shake hard for about 30 seconds to chill the liquid really well', 'Run a lime wedge around the outside of the rim of your glass before rolling the rim in salt', 'Double strain the mix into the glass'],
        largeImg: margaritaLarge
    },
    {
        id: 5,
        name: 'Whiskey Sour',
        primaryIngredient: 'Bourbon Whisky',
        image: whiskySourSmall,
        equipment: ['A shaker', 'A strainer', 'Short glass'],
        ingredients: ['2 parts bourbon', '1 part lemon juice', '½ part sugar syrup', '½ part egg white', 'Cubed ice', 'To garnish: 1 cherry and an orange slice'],
        recipe: ['Put ice and all of the ingredients into a shaker and shake hard for about 20 seconds to chill the liquid really well', 'Strain the mix into a glass filled with ice and garnish with the cherry and orange slice'],
        largeImg: whiskySourLarge
    },
    {
        id: 6,
        name: 'Hot Toddy',
        primaryIngredient: 'Whisky',
        image: hotToddySmall,
        equipment: ['A short glass'],
        ingredients: ['1 ½ parts Whisky', '1/3 part honey syrup', '3 parts hot water', '3 dried cloves, per glass', 'freshly squeezed lemon juice, plus a slice of lemon to garnish each glass', 'cinnamon stic​ks, to garnish each glass'],
        recipe: ['Combine the whisky, honey syrup, hot water and cloves in a toddy glass and stir gently until completely combined. Squeeze in lemon juice, to taste. Remove the cloves, then garnish with a slice of lemon and cinnamon stick.'],
        largeImg: hotToddyLarge
    },
    {
        id: 7,
        name: 'Treacle Cocktail',
        primaryIngredient: 'Rum',
        image: treacleCocktailSmall,
        equipment: ['A short glass'],
        ingredients: ['Teaspoon of sugar syrup (mix 2 parts sugar to 1 part water)', '3 dashes orange bitters', '2 parts Bacardi 8 Year Old Rum', '1 part cloudy apple juice', 'Orange twist, to garnish'],
        recipe: ['Put the sugar syrup and bitters into a rocks glass. Add 2 cubes of ice and about 10ml of the Bacardi 8. Stir well. Add more ice and the remainder of the rum and stir again. Pour in the apple juice and gently stir. Garnish with a twist of orange peel.'],
        largeImg: treacleCocktailLarge
    },
    {
        id: 8,
        name: 'Prosecco Cocktail',
        primaryIngredient: 'Prosecco White Wine & Bitters',
        image: proseccoCocktailSmall,
        equipment: ['A tall glass'],
        ingredients: ['1 sugar cube (or ½ teaspoon sugar)', '4 dashes of Angostura Bitters', '1 part Cognac', 'Top with Martini Prosecco'],
        recipe: ['Add the sugar, bitters and cognac to a Champagne flute. Carefully top up with Martini Prosecco.'],
        largeImg: proseccoCocktailLarge
    },
    {
        id: 9,
        name: 'Mary Pitchfork',
        primaryIngredient: 'Rum',
        image: maryPitchforkSmall,
        equipment: ['A short glass', 'Cocktail shaker'],
        ingredients: ['2 part Bacardi Carta Blanco', '1 part Maraschino liqueur', '2 parts pineapple juice', 'A slice of pineapple, to serve'],
        recipe: ['In a cocktail shaker combine the Bacardi, maraschino and pineapple juice with ice. Shake, strain into a glass and garnish with a pineapple slice.'],
        largeImg: maryPitchforkLarge
    },
    {
        id: 10,
        name: 'Vanilla Pear Drop',
        primaryIngredient: 'Vodka',
        image: vanillaPearDrop,
        equipment: ['Short glass ', 'Muslin cloth'],
        ingredients: ['1 part Grey Goose vodka', '1 part freshly squeezed lemon juice', '1 pear, sliced', '200g Caster sugar', '½ a Vanilla pod, split'],
        recipe: ['Start by making the syrup. Poach the pear in 200ml water with the sugar and vanilla pod. Infuse for 15 minutes, strain through a muslin cloth.', 'In a cocktail shaker, combine the vodka, lemon juice and 30ml of the pear and vanilla syrup. Shake well and strain into a glass of ice.', 'Garnish with a thin slice of pear.'],
        largeImg: vanillaPearDropLarge
    },
    {
        id: 11,
        name: 'Blood Orange Mimosa',
        primaryIngredient: 'Prosecco White Wine',
        image: bloodOrangeMimosa,
        equipment: ['Short glass'],
        ingredients: ['1 part blood orange juice, chilled', '1 part Prosecco, chilled', 'Twist of blood-orange zest'],
        recipe: ['Place blood orange juice in a small tumbler. Top up with chilled Prosecco, add a twist of blood-orange zest and serve.'],
        largeImg: bloodOrangeMimosaLarge
    },
    {
        id: 12,
        name: 'Rossini',
        primaryIngredient: 'Prosecco White Wine',
        image: rossiniSmall,
        equipment: ['Champagne flute', 'Blender'],
        ingredients: ['3 strawberries, hulled', '1 teaspoons sugar', '1 squeeze lemon juice', 'Martini Prosecco'],
        recipe: ['Blend the strawberries, sugar and lemon juice in a blender to make a syrup. Add a splash of Prosecco to a Champagne flute.', 'Pour the syrup and Prosecco into a shaker, fill with ice and stir gently', 'Strain into the glass and top up with a little more Prosecco for some fizz.'],
        largeImg: rossiniLarge
    },
    {
        id: 13,
        name: 'Americana',
        primaryIngredient: 'Prosecco White Wine & Bitters',
        image: americanaSmall,
        equipment: ['Champagne saucer'],
        ingredients: ['⅓ part bourbon', '1 teaspoon maple syrup', '1 dash bitters', '1 part Martini Prosecco'],
        recipe: ['Add the bourbon, maple syrup and Martini Bitters to a cocktail glass. Carefully top the glass with chilled Martini Prosecco. Garnish with a cherry.'],
        largeImg: americanaLarge
    },
    {
        id: 14,
        name: 'Cosmopolitan',
        primaryIngredient: 'Vodka',
        image: cosmopolitanSmall,
        equipment: ['A shaker or stirring glass', 'A bar spoon (or teaspoon)', 'A strainer', 'A match', 'Martini glass'],
        ingredients: ['1 ½ parts orange vodka', '½ part Cointreau liqueur', '1 part cranberry juice', '¼ part fresh lime juice', 'Cubed ice', 'To garnish: orange zest'],
        recipe: ['Chill your cocktail glass (the easiest way is to fill it with ice)', 'Put plenty of ice and all of the ingredients into your shaker or stirring glass and shake or stir vigorously for about 20 seconds', 'Strain the mix into a cocktail glass', 'Cut a piece of orange peel about the size of your thumb (be careful not to bend it). Hold the piece of orange peel between finger and thumb over the glass, and use a match to gently warm it for about 20 seconds', 'Then bend the peel so it releases oil onto the lighted match, igniting a flame that will settle on the surface of the drink'],
        largeImg: cosmopolitanLarge
    }
];

export default allCocktails;