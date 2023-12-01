import React, { Component } from "react"

class Updating extends Component {
    //1. Updating
    constructor(props) {
        super(props);
        this.state = { name: "Rucha" };
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ name: "Hope" })
    //     }, 5000)
    //     console.log("mount")
    // }
    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         name: "Hope"
    //     };

    // }
    shouldComponentUpdate() {
        // return false;
        return true;
    }
    changeName = () => {
        this.setState({ name: "Hope" })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML =
            "Before the update, the name was " + prevState.name;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "Now, the updated name is " + this.state.name;
    }
    render() {
        return (
            <>
                <h1>My name is {this.state.name}</h1>
                <button type="button" onClick={this.changeName}>Click Me</button>
                <div id="div1"></div>
                <div id="div2"></div>
            </>
        );
    }

}
export default Updating;

// https://www.freecodecamp.org/news/react-component-lifecycle (not working this example)