import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      {/* Main content of the application */}
      <div className="content" style={{backgroundColor: 'white'}}>
        <h1>Welcome to the Online Retail Store</h1>
        <p>Explore our products and enjoy shopping!</p>
        {/* Other components can be added here */}
      </div>
    </>
  )
}

export default App
