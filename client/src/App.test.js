import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('if player name is there',  async ()=>{
  const {findByText} = await render(<PlayerCard />, div)
  findByText(/[Alex Morgan]/i)
  // findByText(/Connor Holly/i)
})
