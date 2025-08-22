/**
 * Name App.tsx
 * Description: Here the routing logic is contained
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './Pages/Homepage'
import Productpage from './Pages/ProductPage'

import './App.css'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Productpage" element={<Productpage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
