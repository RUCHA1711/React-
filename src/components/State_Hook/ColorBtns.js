import React from 'react';
import { useState, useEffect } from 'react';

const styles = {
    button: {
        padding: '10px',
        margin: '5px',
        textAlign: "center",
        fontSize: '18px',
    }
}

export default function ColorBtns() {
    const [color, setColor] = useState("");

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

    return (
        <React.Fragment>
            <h1 style={{ width: '100%', textAlign: 'center', backgroundColor: color }}>{color}</h1>
            <button style={styles.button} onClick={() => setColor("Red")}>Red</button>
            <button style={styles.button} onClick={() => setColor("Green")}>Green</button>
            <button style={styles.button} onClick={() => setColor("Yellow")}>Yellow</button>
        </React.Fragment>
    )
}
