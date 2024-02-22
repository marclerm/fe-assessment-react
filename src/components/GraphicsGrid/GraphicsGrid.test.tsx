import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GraphicsGrid from './GraphicsGrid';

describe('<GraphicsGrid />', () => {
  test('it should mount', () => {
    render(<GraphicsGrid />);
    
    const graphicsGrid = screen.getByTestId('GraphicsGrid');

    expect(graphicsGrid).toBeInTheDocument();
  });
});