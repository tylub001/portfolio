import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
