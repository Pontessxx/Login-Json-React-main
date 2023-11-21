import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
const index = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const showNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };
    const handleGoToRegister = () => {
        showNavbar
        // Redirecionar para a tela de registro
        window.location.href = '/register'; // ou use o react-router-dom para navegação programática
      };
  return (
    <header>
        <h3>HEALTH ID</h3>
        <nav className={isNavOpen ? "responsive_nav" : ""}>
            <Link to="/"  onClick={showNavbar}>Home</Link>
            <Link to="/register"  onClick={handleGoToRegister}>Registrar</Link>
            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}
            >
                <FaTimes />
            </button>
        </nav>

        <button
        className="nav-btn"
        onClick={showNavbar}
        >
        <FaBars />
        </button>
    </header>
  )
}

export default index
