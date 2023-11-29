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