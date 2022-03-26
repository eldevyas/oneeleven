import { useState } from 'react'

import '../Dist/index.css'
import Header from '../Layouts/header'
import Main from '../Components/main'
import MainBackground from '../Components/mainBackground';
import Options from '../Components/options'
import Purpose from '../Components/purpose'
import Algorithm from '../Components/algorithm'
import Services from '../Components/services'
import Mailing from '../Components/mailing'
import Footer from '../Layouts/footer'
import TopButton from '../Layouts/topButton'

function Home() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <div className="Main">
          <Header/>
          <Main/>
          <MainBackground/>
        </div>
        <div className="Content">
          <Options/>
          <Purpose/>
          <Algorithm/>
          <Services/>
          <Mailing/>
          <TopButton/>
        </div>
        <div className='Footer'>
          <Footer/>
        </div>
      </div>
  )
}

export default Home;