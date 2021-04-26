import React, { useState, useEffect } from "react";

function Form() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo != "") {
      const todoInsert = {
        id: Math.floor(Math.random() * 10000), //Generate random id from 0 to 10000
        value: todo,
        isCompleted: false,
      };

      setTodoList([...todoList, todoInsert]); //... operator "spreads out the own enumerable properties as properties of the element you're creating" stack overflow
      setTodo("");
      
    }
  };

  React.useEffect(() => {
    const list = localStorage.getItem('todos')
    if(list){
      setTodoList(JSON.parse(list))
    }
   }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
   }, [todoList]);



  const deleteTodo = (e, id) => {
    e.preventDefault();
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  const completeTodo = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  const pStyleNotCompleted = {
    textdecoration: 'none',
    display: 'inline'
  };

  const pStyleCompleted = {
    'text-decoration': 'line-through',
    display: 'inline'
  };

  return (
    <div>
      <label htmlFor="newItem">Nuovo item</label>
      <input
        type="text"
        name="newItem"
        id="newItem"
        onChange={(e) => handleChange(e)}
        value={todo}
        placeholder="Insert todo"
      />
      <button onClick={addTodo}>Add</button>

      {todoList.length > 0 ? (
        <ul>
          {todoList.map((t) => (
            <div className="todoLi" key={t.id}>
              <li>
                <input
                  type="checkbox"
                  onChange={() => completeTodo(t.id)}
                  checked={t.isCompleted}
                />
                {t.isCompleted ? <p style={pStyleCompleted}>{t.value}</p> : <p style={pStyleNotCompleted}>{t.value}</p>}
                <button onClick={(e) => deleteTodo(e, t.id)}>Delete</button>
              </li>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Form;
