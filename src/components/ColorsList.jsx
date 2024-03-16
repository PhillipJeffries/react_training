import React from "react";

import StarRating from "./stars.jsx";

const Color = ({id, title, color, rating}) => {
    return (
        <div key={id}>
            <h3 style={{color: color}}>{title}</h3>
            <StarRating enable = {false} raitng={rating}/>
        </div>
    )
}

const ColorsList = ({colors = {}}) => {
    if (!colors.length) return <div>No Colors Listed.</div>;
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    );
}

export default ColorsList