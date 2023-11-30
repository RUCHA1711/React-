import React, { Component } from "react"

class Updating extends Component {
    //1. Updating
    constructor(props) {
        super(props);
        this.state = { name: "Rucha" };
        console.log('hello')
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "hope" })
        }, 1000)
        console.log("mount")
    }
    static getDerivedStateFromProps(props, state) {
        return { name: props.fav };

    }
    render() {
        return (
            <>
                <h1>My name is {this.state.name}</h1>
            </>
        );
    }

}
export default Updating;

// https://www.freecodecamp.org/news/react-component-lifecycle (not working this example)