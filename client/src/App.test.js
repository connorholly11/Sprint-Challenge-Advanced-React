import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('if player name is there',  async ()=>{
  const playerdiv = document.getElementById('propsPlayer');
  const {findByText} = await render(<PlayerCard />, playerdiv)
  findByText(/[Alex Morgan]/i)
  // findByText(/Connor Holly/i)
})

// test('HELLO WORLD IS THERE',  async ()=>{
//   const {findByText} = render(<App/>)
//   findByText(/hello world/i)
//   // findByText(/Connor Holly/i)
// })


// test('if player name is there',  async ()=>{
//   // const playerdiv = document.getElementById('propsPlayer');
//   const wrapper = await render(<PlayerCard />)
//   expect(wrapper.getByText(/[Alex Morgan]/i))
//   // findByText(/Connor Holly/i)
// })
