import React from 'react';
import ReactDOM from 'react-dom';
import Home from './';

it('Renders without crashing: Home', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
