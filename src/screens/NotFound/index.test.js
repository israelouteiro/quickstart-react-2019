import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './';

it('Renders without crashing: NotFound', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
