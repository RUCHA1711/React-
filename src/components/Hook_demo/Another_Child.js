
const AnotherChild = ({ todos, sampleFunction }) => {
    return (
        <>
            <button type='button' onClick={sampleFunction}>Click Me</button>
            <h6>{todos}</h6>
        </>
    )
}
export default (AnotherChild)