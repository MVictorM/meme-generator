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
        return <div>
            <Conditional isLoading={this.state.isLoading} />
        </div>;
    }
}

export default App;
