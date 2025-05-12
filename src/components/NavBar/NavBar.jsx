import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <>
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Projects
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        About Me
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        Contact
      </NavLink>
      
    </nav>
    <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

</>

  );
}

export default NavBar;
