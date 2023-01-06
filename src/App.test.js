/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders_header', () => {
  render(<App />);
  expect(screen.getByText(/fantastic app/i))
      .toBeInTheDocument();
});
