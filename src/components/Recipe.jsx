import React from "react";

import StarRating from "./stars.jsx";

const Recipe = ({props}) => {
    console.log(props);
    // const { name, ingredients, steps } = props[0]
    return (
        <>
            {props.map((recipe, i) => (
                <div key={i}>
                    <h1>{recipe.name}</h1>
                    <ul>
                        {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>
                                <h3>{ingredient.name}</h3>
                                <p>{ingredient.amount} {ingredient.measurement}</p>
                            </li>
                        ))}
                    </ul>
                    <section>
                        <h2>Instructions</h2>
                        {recipe.steps.map((step, i) => (
                            <p key={i}>{step}</p>
                        ))}
                    </section>
                    <StarRating />
                </div>
            ))}

        </>
    )
}

export default Recipe;