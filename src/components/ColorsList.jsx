import React from "react";

import StarRating from "./stars.jsx";

const Color = ({id, title, color, rating, onDelete = f => f}) => {
    return (
        <div key={id}>
            <h3 style={{color: color}}>{title}</h3>
            <StarRating enable = {false} raitng={rating}/>
            <button onClick={() => onDelete(id)}>remove color</button>
        </div>
    )
}

const ColorsList = ({colors = [], onDelete = f => f}) => {
    // const [colorsList, setColorsList] = useState(colors)

    // const onRemove = (id) => {
    //     const newList = colorsList.filter(color => color.id !== id)
    //     console.log('click', id)
    //     setColorsList(newList)
    // }

    if (!colors.length) return <div>No Colors Listed.</div>;
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} onDelete={onDelete}/>)
            }
        </div>
    );
}

export default ColorsList