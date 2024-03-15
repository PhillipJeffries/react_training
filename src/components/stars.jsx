import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

// export default function StarRating() {
//     return [
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="grey" />,
//         <FaStar color="grey" />
//     ];
// }

const Star = ({onClick = f => f, selected = false }) => (
    <FaStar onClick={onClick} color={selected ? "red" : "grey"} />
);

const createArray = length => [...Array(length)];
export default function StarRating({ totalStars = 5 }) {

    const [selectedStars, setSelectedStars] = useState(3)

    return (
        <>
            {createArray(totalStars).map((n, i) => <Star onClick={()=>setSelectedStars(i+1)} key={i} selected={selectedStars > i} />)}
            <p>
                {selectedStars} of {totalStars}
            </p>
        </>
    )
}