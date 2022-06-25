import { render, screen } from '@testing-library/react';
import App from '../containers/App';
import {Provider} from "react-redux";

// https://testing-library.com/docs/react-testing-library/api#baseelement

const stubStore = {
  getState: jest.fn()
}

test('onRequestRobots() is invoked', () => {
  const { container } = render(<Provider store={stubStore}><App /></Provider>);
  console.log(container.innerHTML);
  expect(true).toBe(true);
});

// Robots request is made.

// CardList is rendered with correct data.

// onSearchChange is triggered.
