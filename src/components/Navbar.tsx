import "./Navbar.css";
import NavbarLogo from "/assets/images/NavbarLogo.png";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const navItems = [
    { label: "Home", path: "#home" },
    { label: "Services", path: "#services" },
    { label: "Logo", path: "#logo", renderCell: <img src={NavbarLogo} /> },
    { label: "About", path: "#about" },
    { label: "Contact", path: "#contact" },
  ];
  return (
    <div className="navbar">
      {navItems.map((navItem) => {
        return navItem.renderCell ? (
          <HashLink to={navItem.path} smooth>
            <div className="navItem">{navItem.renderCell}</div>
          </HashLink>
        ) : (
          <HashLink to={navItem.path} smooth>
            <div className="navItem">{navItem.label}</div>
          </HashLink>
        );
      })}
    </div>
  );
}

export default Navbar;
