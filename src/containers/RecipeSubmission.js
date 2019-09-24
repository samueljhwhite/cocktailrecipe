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
            <div>
                <form id='submissionForm' onSubmit={ this.submission }>
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
                </form>
                <button type='submit' form='submissionForm'>Send</button>
            </div>
        );
    }

}

export default RecipeSubmission;

// <input type="hidden" name="form-name" value="contact-form" /> 