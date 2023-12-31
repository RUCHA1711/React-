import React from 'react';
import ReactDOM from 'react-dom/client';
//  props example of class component:
//
// Parent Component
class Parent extends React.Component {
    render() {
        return (
            <div>
                <h2>You are inside Parent Component</h2>
                <Child name="User" userId="5555" />
            </div>
        );
    }
}

// Child Component
class Child extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello, {this.props.name}</h2>
                <h3>You are inside Child Component</h3>
                <h3>Your user id is: {this.props.userId}</h3>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Parent />
    </React.StrictMode>
);