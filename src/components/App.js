import React, {Component} from 'react';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }

    render() {
        return <div>
            <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}.</h1>
        </div>;
    }
}

export default App;
