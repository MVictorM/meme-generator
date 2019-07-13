import React, {Component} from 'react';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        //GET the data I need to correctly display
        //The componentDidMount() method runs after the component output has been rendered to the DOM.
        //This is a good place to set up a timer:
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //quando o componente pai passa props, podemos verificar se mudou alguma coisa
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }
    }

    //determina se o componente deve ser recarregado
    //por padrão, react atualiza automaticamente quando tem alguma alteração
    shouldComponentUpdate(nextProps, nextState) {
        //return true if want it to update
        //return false if not
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //create a backup of the current way things are
    }


    componentWillUnmount() {
        //teardown or cleanup your code before your component disappears
        //exemple: remove event listener
        clearInterval(this.timerID);
    }

    render() {
        return <div>

        </div>;
    }
}

export default App;
