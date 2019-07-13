import React, {Component} from 'react';
import Conditional from './Conditional';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                {this.state.isLoading ?
                    <h1>Loading...</h1> :
                    <Conditional />}
            </div>
        );
    }
}

export default App;
