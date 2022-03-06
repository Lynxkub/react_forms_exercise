import React from 'react';
import {render , fireEvent} from '@testing-library/react'
import Todo from './Todo';
import '@testing-library/jest-dom/extend-expect';


it('renders without crashing' , function () {
    render(<Todo />)
})


it('matches snapshot' , function () {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})