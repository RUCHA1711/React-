// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)

import { useEffect, useState } from "react";
function Example() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        console.log('first', `You clicked ${count} times`);
    });
    useEffect(() => {
        // Update the document title using the browser API
        console.log('second', `You clicked ${count1} times`);
    }, [count1]);
    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>

            <div>
                <p>You clicked {count1} times</p>
                <button onClick={() => setCount1(count1 + 1)}>
                    Click me
                </button>
            </div>
        </>
    );

}
export default Example;
