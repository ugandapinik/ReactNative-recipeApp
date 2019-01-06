/**
 * Created by jewelmahmudnimulshamim on 2019-01-05.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "32d91cdfcc7eb3c690de66c2a458e542";

class Recipe extends React.Component{

    state = {
        activeRecipe: []
    }

    // lifecyle hook - when compnent load on the screen
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const request = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const result = await request.json();
        this.setState({ activeRecipe: result.recipes[0] });


    }

    render() {

        const recipe = this.state.activeRecipe;

        return(

            <div className="container">
                { this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title }/>
                        <h3 className="active-recipe__title">{ recipe.title }</h3>
                        <h4 className="active-recipe__publisher">Publisher <span>{ recipe.publisher }</span></h4>
                        <p className="active-recipe__website"><span><a
                            href={ recipe.publisher_url }>{ recipe.publisher_url }</a></span></p>
                        <button className="active-recipe__button">
                            <Link to="/">
                                Go Home
                            </Link>
                        </button>
                    </div>
                }
            </div>

        )
    }
}
export default Recipe;