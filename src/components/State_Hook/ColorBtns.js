import React from 'react';
import { useState } from 'react';


export default function ColorBtns() {
    const [color, setColor] = useState("");

    return (
        <>
            <h1>Colored Buttons {color}</h1>
            <button onClick={() => setColor("Red")}> Button 1</button>
            <button onClick={() => setColor("Green")}>Button 2</button>
            <button onClick={() => setColor("Yellow")}>Button 3</button>
        </>
    )
}
