import React from 'react'
import '../App.css'

const ToDoDisplay = (props) => {

    const handleUpdate = (e, i) => {
        const listToUpdate = [...props.todos]
        listToUpdate[i].checked = e.target.checked
        props.onUpdate(listToUpdate)
    }
    return (
        <div>
            <h1>To Do List</h1>
            {
                props.todos.map((eachTodo, i) => (
                    <ul key={i}>
                        <li
                        style={{
                            textDecoration: eachTodo.checked ? 'line-through' : 'none'
                        }}
                        >{eachTodo.list}<input type='checkbox' checked={eachTodo.checked || false} onChange={(e) => handleUpdate(e, i)}  /></li>
                    </ul>
                ))
            }
            </div>
    )
}

export default ToDoDisplay