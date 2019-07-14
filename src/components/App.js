import React, {Component} from 'react';
//https://swapi.co/         --api de star wars

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {},
            loading: true
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => {
                //como não importa o que estava armazenado, não passa prevState como parametro
                this.setState({
                    character: data,
                    loading: false
                })
            })
    }

    render() {
        return <div>
            {this.state.loading ? 'Loading...' : this.state.character.name}
        </div>;
    }
}

export default App;
