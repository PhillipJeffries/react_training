import React from "react";

const Recipe = (props) => {
    console.log(props[0]);
    const {name, ingredients, steps} = props[0]
    return (
        <>
            <h1>{name}</h1>
            <ul>
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.name}</li>
                ))}
            </ul>
            <section>
                <h2>Instructions</h2>
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                ))}
            </section>
        </>
    )
}

export default Recipe;