import React from 'react';

class RecipeSubmission extends React.Component {
    constructor() {
        super()
        this.state = {
            cocktailName: '',
            ingredients: '',
            recipeMethod: ''
        }
    };

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    submission = (e) => {
        console.log(e);
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({ 'form-name': 'submissionForm', ...this.state })
        })
            .then(() => alert('Success'))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value);
    };


    render() {
        const { cocktailName, ingredients, recipeMethod } = this.state;

        return (
            <div>
                <form onSubmit={ this.submission }>
                    <input type="hidden" name="form-name" value="submissionForm"/>
                    <p>
                        <label className='formTitle'>Cocktail Name</label>
                        <br></br>
                        <input type='text' name='cocktailName' value={ cocktailName } onChange={ this.handleChange }></input>
                    </p>
                    <p>
                        <label className='formTitle'>Ingredients</label>
                        <br></br>
                        <input type='text' name='ingredients' value={ ingredients } onChange={ this.handleChange }></input>
                    </p>
                    <p>
                        <label className='formTitle'>Recipe Instructions</label>
                        <br></br>
                        <textarea name='recipeMethod' value={ recipeMethod } onChange={ this.handleChange }></textarea>
                    </p>
                    <button type='submit'>Send</button>
                </form>
            </div>
        );
    }

}

export default RecipeSubmission;