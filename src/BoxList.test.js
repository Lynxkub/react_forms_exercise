import React from 'react';
import {render , fireEvent} from '@testing-library/react'
import Box from './Box';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';
import '@testing-library/jest-dom/extend-expect';


it('renders wihtout crashing' , function () {
    render(<BoxList />)
    render(<NewBoxForm />)
})


it('matches snapshot' , function () {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})

it('should create a box when form is filled out' , function () {
    const{queryByText, getByTestId} = render(<BoxList />);
    const height = getByTestId('height');
    const width = getByTestId('width');
    const color = getByTestId('backgroundColor');
    const addBox = queryByText('Add Box');
    // Before the box is created
    expect(queryByText('X')).not.toBeInTheDocument();
    fireEvent.change(height , {target : {value : 100}});
    fireEvent.change(width , {target : {value : 100}});
    fireEvent.change(color , {target : {value : 'blue'}});
    fireEvent.click(addBox);
    // Box is created along with a button with an X
    expect(queryByText('X')).toBeInTheDocument();
    // Deleting Box
    const deleteBox = queryByText('X');
    fireEvent.click(deleteBox);
    expect(queryByText('X')).not.toBeInTheDocument();
})