import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import Navbar from './components/Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App has header", () => {
  // Arrange
  const { getByText } = render(<Navbar />);

  // Act
  const header = getByText(/Women's World Cup/i);

  // Assert 
  expect(header).toBeVisible;
});