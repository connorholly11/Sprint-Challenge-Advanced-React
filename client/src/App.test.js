import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('if player name is there',  async ()=>{
  // const playerdiv = document.getElementById('propsPlayer');
  const {findByText} = await render(<PlayerCard />)
  findByText(/[Alex Morgan]/i)
  // findByText(/Connor Holly/i)
})

