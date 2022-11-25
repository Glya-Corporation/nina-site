import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Galery from './components/Galery'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const [showBtn, setShowBtn] = useState(false);

  window.onscroll = function () {
    var y = window.scrollY;
    if(y > 400 ){
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  };

  return (
    <main className="App">
      <Header />
      <Home />
      <Galery />
      <Contact />
      <a href="#home" className={`material-symbols-outlined arrow-up ${showBtn && 'arrow-up-show'}`}>arrow_circle_up</a>
    </main>
  )
}

export default App
