import React from 'react';
import { useState } from 'react';

const styles = {
    button: {
        padding: '10px',
        margin: '5px',
        textAlign: "center"

    }
}

export default function ColorBtns() {
    const [color, setColor] = useState("");

    return (
        <>
            {/* <h1>Colored Buttons {color}</h1> */}
            <button style={styles.button} onClick={() => setColor("Red")}> Button 1</button>
            <button style={styles.button} onClick={() => setColor("Green")}>Button 2</button>
            <button style={styles.button} onClick={() => setColor("Yellow")}>Button 3</button>
        </>
    )
}
