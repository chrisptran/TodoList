import React, {useState} from 'react'
import ToDoList from '../components/ToDoList'
import ToDoDisplay from '../components/ToDoDisplay'

const ToDoPage = () => {

    const [todoList, setTodoList] = useState([])

    const receiveNewTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
    }

    const updateTodoList = (updatedList) => {
        setTodoList(updatedList)
    }
    return (
        <div>
            <ToDoList onNewList={receiveNewTodo}/>
            <ToDoDisplay todos={todoList} onUpdate={updateTodoList}/>
        </div>
    )
}

export default ToDoPage