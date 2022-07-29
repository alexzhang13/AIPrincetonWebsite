import React from 'react'

import './App.css'
import { About, Blog, Features, Footer, Header, Possibility } from './containers'
import { Cta, Brand, Navbar } from './components'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <About />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App