import React, {Component} from 'react';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
        this.login = this.login.bind(this);
    }

    login() {
        this.setState((prevState) => {
            return {
                logged: !prevState.logged
            }
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.logged ? 'Logged in' : 'Logged out'}</h2>
                <button onClick={this.login}>{this.state.logged ? 'Log out' : 'Log in'}</button>
            </div>
        );
    }
}

export default App;
