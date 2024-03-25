import React, {useRef, useState} from "react";

import StarRating from "./stars.jsx";

const AddColorForm = ({onNewColor = f => f}) => {
    // const textRef = useRef()
    // const colorRef = useRef()

    const [text, setText] = useState('')
    const [color, setColor] = useState('#000000')

    const submit = (e) => {
        e.preventDefault()
        console.log('submit')
        const title = text
        const color = color
        onNewColor(title, color)
        setText('')
        setColor('#000000')

    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="Color title"/>
            <input onChange={(e) => setColor(e.target.value)} value={color} type="color" />
            <button>add</button>
        </form>
    )
}

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
            <AddColorForm/>
            {
                colors.map(color => <Color key={color.id} {...color} onDelete={onDelete}/>)
            }
        </div>
    );
}

export default ColorsList