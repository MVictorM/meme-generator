import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            age: 24
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    }

    render() {
        return <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name"
                           placeholder="Full name"
                           value={this.state.name}
                           onChange={this.handleChange} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age"
                           placeholder="Ex: 24"
                           value={this.state.age}
                           onChange={this.handleChange} />
                </label>
            </form>
            <p>{this.state.name ? "Hello, " + this.state.name + '. ' : ''}{this.state.age ? 'You are ' + this.state.age + 'years old.' : ''}</p>
        </div>;
    }
}

export default App;
