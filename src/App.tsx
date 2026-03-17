import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Menu from './components/Menu'
import Consultas from './components/Consultas'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Menu />
      <Consultas />
      <Ubicacion />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
