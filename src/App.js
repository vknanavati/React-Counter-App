import { useState } from 'react'
function App() {

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <button
        onClick={handleSubtract}>-</button>
      <span>{count}</span>
      <button
        onClick={handleAdd}>+</button>
    </>
  );
}

export default App;
