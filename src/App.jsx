import { useEffect, useState } from 'react'
import logo from './logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      {/* <div className='transmision' style={{padding: '56.25% 0 0 0', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iframe src="https://vimeo.com/event/2111881/embed" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position: 'absolute', top: 0, left: 0, padding: '5%', boxSizing: 'border-box', margin: 'auto'}} title="WerfenTalks" /></div> */}

      </header>
    </div>
  )
}

export default App
