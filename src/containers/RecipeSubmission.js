import React from 'react';

class RecipeSubmission extends React.Component {
    constructor() {
        super()
        this.state = {
            cocktailName: '',
            ingredients: '',
            method: ''
        }
    };

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    submission = (e) => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({ 'form-name': 'contact', ...this.state })
        })
            .then(() => alert('Success'))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


    render() {
        const { cocktailName, ingredients, method } = this.state;

        return (
            <form netlify="true" onSubmit={ this.submission }>
                <p>
                    <label className='formTitle'>Cocktail Name</label>
                    <input type='text' name='cocktailName' value={ cocktailName } onChange={ this.handleChange }></input>
                </p>
                <p>
                    <label className='formTitle'>Ingredients</label>
                    <input type='text' name='ingredients' value={ ingredients } onChange={ this.handleChange }></input>
                </p>
                <p>
                    <label className='formTitle'>Recipe / Method</label>
                    <input type='text' name='method' value={ method } onChange={ this.handleChange }></input>
                </p>
                <p>
                    <button type='submit'>Send</button>
                </p>
            </form>
        );
    }

}

export default RecipeSubmission;