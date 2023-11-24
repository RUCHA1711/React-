// import Fruit from './Fruit'
import React from 'react';
import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import Car from './Car' 
// function App() {
// const fruits = [
//   {
//         name: "Mango",
//         color: "Yellow"
//     },
//     {
//       name: "Pineapple",
//       color: "Light Yellow"
//     },
//     {
//       name: "Apple",
//       color: "Red"
//     }
// ]
//Props Example
//     const fruits =
//     {
//         name: "Mango",
//         color: "Yellow"
//     }

//     return (
//         <div className="App">
//       <Fruit fruits={fruits} />
//         </div>
//     );
// }

// export default App;


//React List
// Component that will return an unordered list

// function NavMenu(props)
// {
//     const list = props.menuitems;

//     const updatedList = list.map((listItems)=>{
//         return <li>{listItems}</li>;
//     });

//     return(
//         <ul>{updatedList}</ul>
//     );
// }

// const menuItems = [1,2,3,4,5];

// ReactDOM.render(
//     <NavMenu menuitems = {menuItems} />, 
//     document.getElementById('root')
// );

// const name = "Learner";

// const element = (
//     <h1>
//         Hello,
//         {name}.Welcome to Geeks for Geeks.
//     </h1>
// );

// ReactDOM.render(element, document.getElementById("root"));

// const Demo=()=>{return <h1>Welcome to GeeksforGeeks</h1>};
// export default Demo;

//React Fragment Example: 
// const Table = ({ children, style }) => {
//   return <div>{children}</div>;
// };

// const TableData = () => {
//   return (
//     <React.Fragment>
//       <td>John Doe</td>
//       <td>16</td>
//       <td>Developer</td>;
//     </React.Fragment>
//   );
// }

// function App() {
//   return (
//     <Table>
//       <tr>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Occupation</th>
//       </tr>
//       <TableData />
//     </Table>
//   );
// }
// export default App;

// useState Example
// function Counter() {
//   // Declare a new state variable, which we'll call "count"
//   // const [count, setCount] = useState(0);
//   let count = 0;
//   function handleClick() {
//     count = count + 1;
//     // setCount(count + 1);
//   }

//   return (

//     <div>

//       <p>Count: {count}</p>

//       <button onClick={handleClick}>Increment</button>

//     </div>

//   );
// }
// export default Counter;
//useEffect
function Example() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('first', `You clicked ${count} times`);
  }, [count]);
  useEffect(() => {
    // Update the document title using the browser API
    console.log('second', `You clicked ${count1} times`);
  }, [count1]);
  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      <div>
        <p>You clicked {count1} times</p>
        <button onClick={() => setCount1(count1 + 1)}>
          Click me
        </button>
      </div>
    </>
  );

}
export default Example;
