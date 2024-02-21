import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders title correctly', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Search a flower image by name or color/i);
  expect(titleElement).toBeInTheDocument();
});

// test('renders PixabayImageSearch component', () => {
//   const { getByTestId } = render(<App />);
//   const pixabayImageSearchComponent = getByTestId('pixabay-image-search');
//   expect(pixabayImageSearchComponent).toBeInTheDocument();
// });

// test('renders with correct styles', () => {
//   const { getByText, getByTestId } = render(<App />);
//   const titleElement = getByText(/Search a flower image by name or color/i);
//   const appContainer = getByTestId('app-container');

//   expect(titleElement).toHaveClass('text-3xl');
//   expect(appContainer).toHaveClass('container', 'mx-auto', 'mt-4', 'p-4');
// });
