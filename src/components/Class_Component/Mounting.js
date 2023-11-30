import React, { Component } from "react"

class Mounting extends Component {
    //1. Mounting
    constructor(props) {
        super(props);
        this.state = { name: "Rucha" }
    }
    render() {
        return (<h1>My name is {this.state.name}</h1>);
    }
    componentDidMount() {
        console.log("componentDidMount()");
    }
}
export default Mounting;


// Case-1
//     constructor() {
//     this.state = { name: "Rucha" }
// }

//Case-2
// constructor() {
//     super();
//     this.state = { name: "Rucha" }
// }
