import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }
  const minusClick = () => {
    setCounter(counter - 1);
  }
  const zeroClick = () => {
    setCounter(0);
  }

  return (
    <div>
      <p>Counter: { counter }</p>
      <button onClick={handleClick}>plus</button>
      <button onClick={minusClick}>minus</button>
      <button onClick={zeroClick}>Zero</button>
    </div>
  )
}

export default App;