import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './context/Counter';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {

  const counterState = useContext(CounterContext);
  console.log("Context", counterState);
  return (
    <div className="App">
      {/* <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}
      <div className="item-list">
        <Item
          name="iPhone 15"
          price={700}
        />
        <Item
          name="iPhone 15 Pro"
          price={990}
        />
        <Item
          name="Samsung S24"
          price={700}
        />
        <Item
          name="Samsung S24 Ultra"
          price={900}
        />
        <Item
          name="Macbook Air"
          price={900}
        />
        <Item
          name="iPhone 15+"
          price={800}
        />
      </div>

      <Cart/>
    </div>
  );
};

export default App;
