import React from 'react'
import '../App.css'

const ToDoDisplay = (props) => {

    const handleUpdate = (e, i) => {
        const listToUpdate = [...props.todos]
        listToUpdate[i].checked = e.target.checked
        props.onUpdate(listToUpdate)
    }

    const handleDelete = (deleteIdx) => {
        const filteredList = props.todos.filter((eachTodo, i) => i !== deleteIdx)
        props.onUpdate(filteredList)
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
                    <button onClick={(e) => handleDelete(i)} >Delete</button>
                    </ul>
                ))
            }
            </div>
    )
}

export default ToDoDisplay