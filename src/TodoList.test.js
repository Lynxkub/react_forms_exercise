import React from 'react';
import {render , fireEvent} from '@testing-library/react'
import Todo from './Todo';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import '@testing-library/jest-dom/extend-expect';


it('renders without crashing' , function () {
    render(<TodoList />)
})


it('matches snapshot' , function () {
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
})

it('created and deletes todos' , function () {
    const {queryByText , getByTestId} = render(<TodoList />);
    const todo = getByTestId('todo');
    const btn = queryByText('Add Todo');
    // Before todo is created
    expect(queryByText('Remove Todo')).not.toBeInTheDocument();
    // Creating a todo 
    fireEvent.change(todo , {target : {value : 'mow lawn'}});
    fireEvent.click(btn);
    expect(queryByText('Remove Todo')).toBeInTheDocument();
    // Deleting the todo
    fireEvent.click(queryByText('Remove Todo'));
    expect(queryByText('Remove Todo')).not.toBeInTheDocument();
})