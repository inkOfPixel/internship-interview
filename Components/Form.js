import React, { useState } from 'react'

function Form (){

    const [todo, setTodo] = useState("");
    const [todolist, setTodoList] = useState([])

    const hanldeChange = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const addTodo = () => {
        //console.log(todo); test
        if(todo !== ""){
            const todoInsert = {
                id : Math.floor(Math.random() *1000),
                value : todo,
                isCompleted : false,
            }

            setTodoList([...todolist, todoInsert]) //... operator "spreads out the own enumerable properties as properties of the element you're creating" stack overflow
        }
    }

    const deleteTodo = (e, id) => {
        e.preventDefault();
        setTodoList(todolist.filter(t => t.id != id))
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="newItem">Nuovo item</label>
            <input type="text" name="newItem" id="newItem" onChange= { (e) => hanldeChange(e)} placeholder="Insert todo"/>
            <button onClick= {addTodo} >Add</button>  

            {todolist !== [] ? (
                <ul>
                    {todolist.map(t => 
                    <div className="todoLi">
                    <li>
                        {t.value}
                        <button onClick={e => deleteTodo(e, t.id)}>Delete</button>
                    </li></div>)
                    }
                </ul>
            ) : null}
        </form>
    )
}

export default Form;