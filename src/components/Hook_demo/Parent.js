import Child from './Child'
import AnotherChild from './Another_Child'
import { useState, useEffect, useMemo, useCallback } from 'react';


const Parent = () => {
    const [count, setCount] = useState(1);
    const message = " Child";
    const [count1, setCount1] = useState(0);
    // const [counter, setCounter] = useState(0);
    const calculation = useMemo(() => complexCalculation(count), [count]);

    const sampleFunction = useCallback(() => {
        console.log('sample function is runned')
        setCount1(count1)
    }, [count1]);


    useEffect(() => {
        console.log("Use effect is working")
    }, [count])

    return (
        <>
            <button type="button" onClick={() => setCount(count + 1)}>Counter Increment</button>
            <h1>I've rendered {count} times! </h1>
            <AnotherChild count1={count1} sampleFunction={sampleFunction} />
            <Child counter={message} />
            <h2>Complex Calculation</h2>
            {calculation}
        </>
    )
}
const complexCalculation = (num) => {
    console.log("Calculating...");
};
export default Parent