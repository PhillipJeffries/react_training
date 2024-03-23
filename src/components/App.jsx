import React, {useState} from "react";

import Recipe from "./Recipe.jsx";

import ColorsList from "./ColorsList.jsx";

import recipies from "../data/recipies.json";

import colorData from "../data/color-data.json";


// console.log(colorData)


const App = () => {
    const [colors, setColors] = useState(colorData)
    const deleteColor = (id) => {
        const newColors = colors.filter(color => color.id !== id)
        console.log(newColors)
        setColors(newColors)
    }

    return (
        <>
            <Recipe props={recipies}/>
            <ColorsList colors={colors} onDelete={deleteColor}/>
        </>
    )
}

export default App