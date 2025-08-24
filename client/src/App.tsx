/**
 * Name App.tsx
 * Description: Here the routing logic is contained
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './Pages/Homepage'
import Productpage from './Pages/Productpage'
import './App.css'
import Footer from './components/Footer/Footer'
import React from 'react'
import MegaMenu from './components/Navbar/Desktop/MegaMenu'

function App() {
const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);
const [megaMenuSection, setMegaMenuSection] = React.useState<'mens' | 'womens' | 'kids' | 'sale'>('mens');

const handleCloseMegaMenu = () => {
    if (isMegaMenuOpen) setIsMegaMenuOpen(false);
  };

  return (
    <Router>
      <div onClick={handleCloseMegaMenu}>
        <Navbar setIsMegaMenuOpen={setIsMegaMenuOpen} setMegaMenuSection={setMegaMenuSection}/>
        {isMegaMenuOpen ? <MegaMenu section={megaMenuSection}/> : null}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Productpage" element={<Productpage query='test'/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
