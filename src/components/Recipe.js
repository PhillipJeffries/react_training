import React from "react";

export default Recipe = (props) => {
    const {name, ingredients, steps} = props
    return (
        <section>
            <h1>{name}</h1>
            <ul>
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                ))}
            </ul>
            <section>
                <h2>Instructions</h2>
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                ))}
            </section>
        </section>
    )
}