import { useState, useEffect } from "react";

//useEffect with state (finite rendering)
function HookCounterOne() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    function addNumber() {
        console.log("This is log");
        
        setCount((count) => count + 1)  
        setCount((count) => count + 1)  
        setCount((count) => count + 1)  
        setCount((count) => count + 1)  
        console.log("This is log");
    }
    return (
        <div>
            <button onClick={addNumber}>
                Click {count} times{" "}
            </button>
        </div>
    );
}
export default React.Memo(HookCounterOne)