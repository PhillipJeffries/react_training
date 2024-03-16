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

const Star = ({ onClick = f => f, selected = false }) => (
    <FaStar onClick={onClick} color={selected ? "red" : "grey"} />
);

const createArray = length => [...Array(length)];
export default function StarRating({ style = {}, totalStars = 5, raitng = 0, enable = true }) {

    const [selectedStars, setSelectedStars] = useState(raitng)

    const handleRating = (i) => {
        if (enable) {
            setSelectedStars(i + 1)
        }
    }

    return (
        <div style={{ padding: '5px', ...style }}>
            {createArray(totalStars).map((n, i) => <Star onClick={() => handleRating(i)} key={i} selected={selectedStars > i} />)}
            <p>
                {selectedStars} of {totalStars}
            </p>
        </div>
    )
}