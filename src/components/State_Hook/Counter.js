// useState Hook allows us to track state in a function component.
// useState accepts an initial state and returns two values:

//1. The current state.
//2. A function that updates the state.

function Counter() {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);
    let count = 0;
    function handleClick() {
        count = count + 1;
        // setCount(count + 1);
    }

    return (

        <div>

            <p>Count: {count}</p>

            <button onClick={handleClick}>Increment</button>

        </div>

    );
}
export default Counter;
