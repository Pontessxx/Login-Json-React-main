import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'

function App() {
  

  return (
    <>
      {/* <Registration/> */}

      <Router>
      
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      
    </Router>
    </>
  )
}

export default App
