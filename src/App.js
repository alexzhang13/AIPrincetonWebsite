import React, {useState, useEffect} from 'react'

import './App.css'
import { About, Header } from './containers'
import { Cta, Navbar } from './components'

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <About />
        <Cta />
      </div>
      )}
    </div>
  )
}

export default App