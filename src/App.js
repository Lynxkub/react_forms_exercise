import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList'
import NewBoxForm from './NewBoxForm';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
function App() {
  return (
    <div className="App">
      <TodoList />
      <BoxList />
    </div>
  );
}

export default App;