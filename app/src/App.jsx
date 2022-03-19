import { useState } from 'react'
import './dist/index.css'
import Header from './Layouts/header.jsx'
import Main from './component/main.jsx'
import MainBackground from './component/mainBackground.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="Main">
        <MainBackground/>
        <Header/>
        <Main/>
      </div>
    </div>
  )
}

export default App;