import React, { useRef, useEffect } from 'react';

const MyFunctionalComponent = () => {
  // useRef returns a mutable object with a 'current' property
  const myRef = useRef(null);

  useEffect(() => {
    // Now, myRef.current can be used to access the DOM element
    if (myRef.current) {
      console.log('Ref value:', myRef.current);
    }
  }, []);

  return (
    <div ref={myRef}>
      This is my functional component.
    </div>
  );
};

export default MyFunctionalComponent;