import React from 'react';
import ReactDOM from 'react-dom';
import Example from './';

it('Renders without crashing: Example', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Example />, div);
  ReactDOM.unmountComponentAtNode(div);
});
