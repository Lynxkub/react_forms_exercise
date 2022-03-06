import React from 'react';


const Todo = ({todo , id , deleteTodo}) =>  {

    const handleClick = () => {
        deleteTodo(id);
    }
    return (
        <div>
            <div style = {{display : 'inline-block'}}>{todo}</div>
            <button onClick = {handleClick}>Remove Todo</button>
        </div>
    )
}

export default Todo;