import React, { Component } from "react"

export default class Unmounting extends Component {
    //1. Mounting
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    // componentWillUnmount() {
    //     this.state = { show: false }
    // }
    render() {
        return (
            <>
                <h1>My name is Parent</h1>
                {/* {this.state.show ? <Child /> : null} */}
                <button type="button" onClick={() => { this.setState({ show: !this.state.show }) }}>Click Me</button>
            </>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <>
                <h2>My name is Child</h2>
            </>
        );
    }
}
