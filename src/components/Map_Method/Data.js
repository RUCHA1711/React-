import React from 'react';

const MyComponent = () => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Using map to create an array of React elements
  const renderedItems = data.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <div>
      <h2>List of Items:</h2>
      <ul>{renderedItems}</ul>
    </div>
  );
};

export default MyComponent;
