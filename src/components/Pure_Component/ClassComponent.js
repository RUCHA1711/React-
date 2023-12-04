// import React from "react";
// class App extends React.PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return <div className="app"> Hello World! </div>
//     }
// }
// export default App

//Another class component Example:
import React from 'react';

class App extends React.PureComponent {

    render() {
        const { points = 0 } = this.props;

        return (
            <div>
                <span>{points}</span>
            </div>
        )
    }

}

export default App;