import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgressGrid from './ProgressGrid';


describe('<ProgressGrid />', () => {
  test('it should mount', () => {
    render(<ProgressGrid />);
    
    const progressGrid = screen.getByTestId('ProgressGrid');

    expect(progressGrid).toBeInTheDocument();
  });
});