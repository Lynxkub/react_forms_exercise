import React , { useState } from 'react';
import uuid from 'react-uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'



const TodoList = () => {

    const [todos , setTodos] = useState([]);

   const addTodo = (newTodo) => {
       setTodos(todos => [...todos , {...newTodo , id : uuid() }])
   }

   const deleteTodo = (id) => {
       setTodos(todos => todos.filter(todo => todo.id !== id))
   }

    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm  addTodo={addTodo} />
            <div>
                {todos.map(todo => <Todo id={todo.id} key = {todo.id} todo = {todo.todo} deleteTodo = {deleteTodo}/>)}
            </div>
        </div>
    )
}


export default TodoList;