import React from 'react';
import {render , fireEvent} from '@testing-library/react'
import Box from './Box';
import '@testing-library/jest-dom/extend-expect';

it('renders wihtout crashing' , function() {
    render(<Box />)
})

it('matches snapshot' , function () {
    const {asFragment} = render(<Box style = {{ height : '100px' , width : '100px' , backgroundColor : 'blue' }}/>)
    expect(asFragment()).toMatchSnapshot();
})