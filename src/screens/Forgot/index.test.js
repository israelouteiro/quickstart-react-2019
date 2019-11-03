import React from 'react';
import ReactDOM from 'react-dom';
import Forgot from './';

it('Renders without crashing: Forgot', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Forgot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
