
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-2">
      <div className="container mx-auto">
        <nav className="flex flex-col">
          <div className="flex items-start">
            <Link to="/" className="nav-link">Rasheed</Link>
          </div>
          <div className="mt-2">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div className="mt-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-left">
              Open main menu
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
