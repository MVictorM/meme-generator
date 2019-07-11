import React from 'react'

function TodoItem(props) {
    return <div className='todo-item'>
        <input type='checkbox' defaultChecked={props.item.completed}/>
        <label>{props.item.text}</label>
    </div>
}

export default TodoItem;