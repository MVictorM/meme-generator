import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 24,
            isFriendly: false,
            gender: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        if (type === 'checkbox') {
            return this.setState({
                [name]: checked
            });
        }
        return this.setState({
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
                <br />
                <label>
                    Age:
                    <input type="number" name="age"
                           placeholder="Ex: 24"
                           value={this.state.age}
                           onChange={this.handleChange} />
                </label>
                <br />
                <textarea
                    name='description'
                    value={this.state.description}
                    placeholder='type here your description'
                    onChange={this.handleChange}
                />
                <label>
                    <br />
                    Is friendly?
                    <input type="checkbox"
                           name="isFriendly"
                           checked={this.state.isFriendly}
                           onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    <input type="radio"
                           name="gender"
                           value="male"
                           checked={this.state.gender === "male"}
                           onChange={this.handleChange} />
                           Male
                </label>
                <br />
                <label>
                    <input type="radio"
                           name="gender"
                           value="female"
                           checked={this.state.gender === "female"}
                           onChange={this.handleChange} />
                    Female
                </label>
                <br />

            </form>
            <p>{this.state.name ? "Hello, " + this.state.name + '. ' : ''}{this.state.age ? 'You are ' + this.state.age + 'years old.' : ''}</p>
        </div>;
    }
}

export default App;
