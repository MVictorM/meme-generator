import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: 'Victor Piranha'
        };
        //precisa usar o bind no construtor pois essas funções utilizam
        //o setState que vem do React.Component
        this.sum = this.sum.bind(this);
        this.subtract = this.subtract.bind(this);
        this.doubleNumber = this.doubleNumber.bind(this);
    }
    sum() {
        //passa prevState para recuperar os dados anteriores que estavam no State
        this.setState((prevState) => {

            return {
                count: prevState.count + 1,
                name: prevState.name + 'aa'
            }
        })

        //se fosse para construir um novo state, faríamos assim:
        //this.setState({
            //novos atributos do state aqui
        //})
    }
    subtract() {
        this.setState((prevState) => {

            return {
                count: prevState.count - 1,
                name: prevState.name.substr(0, prevState.name.length - 2)
            }
        })
    }
    doubleNumber() {
        this.setState((prevState) => {

            return {
                count: prevState.count * 2,
            }
        })
    }
    render() {
        return <div className='todo-list'>
            <h1>{this.state.count}</h1>
            <h1>{this.state.name}</h1>
            <button onClick={this.sum} > Sum </button>
            <button onClick={this.subtract} > Subtract </button>
            <button onClick={this.doubleNumber} > Double number </button>
            {/*quando o state for modificado, ele vai renderizar o childComponent automaticamente*/}
            <ChildComponent count={this.state.count} />
        </div>;
    }
}

export default App;
