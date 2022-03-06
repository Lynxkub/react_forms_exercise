import React , { useState } from 'react';



const NewTodoForm = ({addTodo}) => {
   
    const INITIAL_STATE = {
        todo: ""
    }

    const [formData , setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        const {name  , value } = e.target;

        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }


    return (
        <div>
        <form onSubmit = {handleSubmit}>
            <label htmlFor = 'todo'>New Todo</label>
            <input 
            data-testid = 'todo'
            id = 'todo'
            name = 'todo'
            placeholder = 'New Todo'
            type = 'text'
            value = {formData.todo}
            onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
        </div>
    )
}


export default NewTodoForm;