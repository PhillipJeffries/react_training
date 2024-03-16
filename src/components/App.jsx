import React from "react";

import Recipe from "./Recipe.jsx";

import ColorsList from "./ColorsList.jsx";

import recipies from "../data/recipies.json";

import colorData from "../data/color-data.json";


console.log(colorData)


const App = () => {
    return (
        <>
            <Recipe props={recipies}/>
            <ColorsList colors={colorData}/>
        </>
    )
}

export default App