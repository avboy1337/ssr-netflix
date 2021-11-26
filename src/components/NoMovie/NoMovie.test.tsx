import React from 'react';
import { render } from '@testing-library/react';
import NoMovie from './NoMovie';

describe('NoMovie', () => {
    it('render NoMovie module', () => {
        const { getByText } = render(<NoMovie />);
        const noMovieFoundText = getByText(/No Movie Found/i).innerHTML;
        expect(noMovieFoundText).toEqual('No Movie Found');
    });

    it('renders NoMovie snapshot', () => {
        const { asFragment } = render(<NoMovie />);
        // @ts-ignore
        expect(asFragment(<NoMovie />)).toMatchSnapshot();
    });
});
