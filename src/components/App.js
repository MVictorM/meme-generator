import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";

//arrow function
function App() {
    const todoComponents = todosData.map(item =>
        <TodoItem key={item.id} item={item} />
        );
    return <div>
        {todoComponents}
    </div>;
}

export default App;
