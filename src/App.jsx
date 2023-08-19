import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import NavBar from './components/NavBar'
import ObjectBack from './components/ObjectBack'
import Slider from './components/Slider'

function App () {
  return (
    <>
      <NavBar />
      <ObjectBack/>
      <Header/>
      <Main/>
      <Slider />
      <Footer/>
    </>
  )
}

export default App
