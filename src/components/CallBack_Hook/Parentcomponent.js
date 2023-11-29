import { useState, useCallback } from "react";
function ParentComponent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count])

    return (
        <ChildComponent onClick={handleClick} />
    );
}
function ChildComponent({ onClick }) {
    return (
        <button onClick={onClick}>Click Me</button>
    );
}
export default ParentComponent