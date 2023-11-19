import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home'
import Homelog from './Components/HomeLog'

function App() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {/* <Registration/> */}

      <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={ <Home />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Homelog/> : <Registration />}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
