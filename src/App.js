import { useState } from "react";

function App() {
    useState();
    //has to be at top level of the function, not in an if block
    //use state always returns an array with two values
    //the first one is the current state and the second is the function that updates the current state
    //if you pass in the initial state as a function, it will run only the first time the component renders
    const [count, setCount] = useState(()=>{

      console.log('i ran only once');
      return 4;
    });
    const decrementCount = () => {
      setCount(prevCount => prevCount - 1);
      setCount(prevCount => prevCount - 1);
    }

    const increaseCount = () => {
      setCount(prevCount => prevCount + 1);
    }


  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
