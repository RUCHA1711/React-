import React from "react";

const Example = () => {
    const data = ['Item 1', 'Item 2', 'Item 3'];
  
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default Example;


//   const ListItem = ({ text }) => <li>{text}</li>;

// const MyList = () => {
//   const data = [
//     { id: 1, text: 'Item 1' },
//     { id: 2, text: 'Item 2' },
//     { id: 3, text: 'Item 3' },
//   ];

//   return (
//     <ul>
//       {data.map((item) => (
//         <ListItem key={item.id} text={item.text} />
//       ))}
//     </ul>
//   );
// };

// export default MyList;