import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";

//arrow function
class App extends Component {

    render() {
        const todoComponents = todosData.map(item =>
            <TodoItem key={item.id} item={item}/>
        );
        return <div>
            {todoComponents}
        </div>;
    }
}

export default App;
