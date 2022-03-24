import { useState } from 'react'
import './dist/index.min.css'
import Header from './Layouts/header'
import Main from './component/main'
import MainBackground from './component/mainBackground';
import Options from './component/options'
import Purpose from './component/purpose'
import Algorithm from './component/algorithm'
import Services from './component/services'
import Mailing from './component/mailing'
import Footer from './Layouts/footer'

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
        <Algorithm/>
        <Services/>
        <Mailing/>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default App;