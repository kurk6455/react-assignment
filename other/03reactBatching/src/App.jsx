import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(15);

  const increaseFn = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  const decreaseFn = () => {
    setCount(prevCount => prevCount-1);
    setCount(prevCount => prevCount-1);
    setCount(prevCount => prevCount-1);
    setCount(prevCount => prevCount-1);

  }

    return(
      <>
        <div>Count : {count}</div>
        <button onClick={increaseFn}>increase {count}</button>
        <button onClick={decreaseFn}>decrease {count}</button>
        <p>footer : {count}</p>
      </>
    )
}


export default App