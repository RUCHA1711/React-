//Not working
const numbers = [1, 2, 3, 4, 5];

function Number() {
    // const numbers = [1, 2, 3, 4, 5];
    const updatedNums = numbers.map((number, index) => {
        return <li key={index}>{number}</li>;
    });
    console.log(updatedNums)
};

export default Number
