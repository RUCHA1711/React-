//Not working
const numbers = [1, 2, 3, 4, 5];

function Number() {
    // const numbers = [1, 2, 3, 4, 5];
    const updatedNums = numbers.map((number, index) => {
        return <h1 key={index}>{number}</h1>;
    });
    console.log(updatedNums)
};

export default Number
