import { useState } from 'react'
import './dist/index.min.css'
import Header from './Layouts/header'
import Main from './component/main'
import MainBackground from './component/mainBackground';
import Options from './component/options'
import Purpose from './component/purpose'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="Main">
        <MainBackground/>
        <Header/>
        <Main/>
      </div>
      <div className="Content">
        <Options/>
        <Purpose/>
      </div>
    </div>
  )
}

export default App;