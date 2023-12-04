import { useState } from 'react'
import Counter from './Counter'
const Example = () => {
    const [count1, setCount1] = useState(0)
    // const [count2, setCount2] = useState(0)

    const increaseCounter1 = () => {
        setCount1(count1 => count1 + 1)
    }

    return (
        <>
            <button onClick={increaseCounter1}>Increase counter 1</button>
            <Counter value={count1}>Counter 1</Counter>
            {/* <Counter value={count2}>Coutner 2</Counter> */}
        </>
    )
}
export default Example();