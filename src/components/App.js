import React, {Component} from 'react';
import Conditional from './Conditional';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unreadMessages: [
                'real madri is better than barcelona',
                'barcelona sucks'
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.unreadMessages.length > 0 ?
                    <h1>You have {this.state.unreadMessages.length} unread messages</h1> :
                    <h1>You don't have any unread messages :(</h1>
                }
            </div>
        );
    }
}

export default App;
