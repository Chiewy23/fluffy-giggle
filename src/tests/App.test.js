import { render, screen } from '@testing-library/react';
import App from '../containers/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Robots request is made.

// CardList is rendered with correct data.

// onSearchChange is triggered.
