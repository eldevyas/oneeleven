import { useState } from 'react'
import './dist/index.min.css'
import Header from './component/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
    </div>
  )
}

export default App;