import React, {Component} from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData'

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todosData,
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>);
        return <div className='todo-list'>
            {todoItems}
        </div>;
    }
}

export default App;
