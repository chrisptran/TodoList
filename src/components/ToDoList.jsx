import React, { useState } from 'react'
import '../App.css'

const ToDoList = (props) => {

    const [list, setList] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = { list };
        props.onNewList(todo)

    }
    return (
        <div>
            <form className='formList' onSubmit={handleSubmit}>
                <div>
                    <input type='text' name='list' onChange={e => setList(e.target.value)} />
                </div>
                <div>
                <input type='submit' value='Add Todo' />

                </div>
            </form>
        </div>
    )
}

export default ToDoList