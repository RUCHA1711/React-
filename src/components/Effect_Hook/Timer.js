
import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    //Props or state are passed (Infinite loop becoz we have passed state in dependency 
    // and  we are also changing state in useEffect)
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [count]);
    // return <h1>I have rendered {count} times!</h1>;
    // useEffect(() => {
    //     console.log("Mounting...")
    // }, [count]);
    return (<><h1>I have rendered {count} times!</h1><button onClick={() => setCount(count+1)}>Increment</button></>);
}
// 1. An empty array (only render once)

// useEffect(() => {
//     setTimeout(() => {
//         setCount((count) => count + 1);
//     }, 1000);
// }, []);


//2. No dependency (infinte times)

// useEffect(() => {
//     setTimeout(() => {
//         setCount((count) => count + 1);
//     }, 1000);
// return <h1>I have rendered {count} times!</h1>;
// }

export default Timer;






//Note: useEffect runs on every render. That means that when the count changes, a render happens, 
// which then triggers another effect.