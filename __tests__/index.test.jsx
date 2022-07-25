// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByTestId('title');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Bienvenido a Matias Pokemon');
  });
});
