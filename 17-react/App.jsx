import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Counter: {count}
      </button>
    </>
  )
}

export default App
