const numbers = [1, 2, 3, 4, 5];

function Number() {
    const updatedNums = numbers.map((number) => {
        return <li>{number}</li>;
    });
    console.log(updatedNums)
};

export default Number