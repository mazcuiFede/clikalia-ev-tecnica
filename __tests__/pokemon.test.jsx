// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import Pokemon from '../pages/pokemon/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Pokemon />);

    const row = screen.getAllBy('row-pikachusdas', {
      name: '',
    });

    expect(row).toBeInTheDocument();
  });
});
