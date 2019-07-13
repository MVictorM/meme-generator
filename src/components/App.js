import React, {Component} from 'react';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);

    }
    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <div className='todo-list'>
            <img onMouseEnter={() => console.log('entrou')}
                 onMouseLeave={() => console.log('saiu')}
                 src='http://live.staticflickr.com/3077/3158881133_42d58d4a62_b.jpg' />
            <button onClick={this.handleClick} > Click me! </button>
        </div>;
    }
}

export default App;
