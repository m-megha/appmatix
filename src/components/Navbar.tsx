import "./Navbar.css";
import NavbarLogo from "/assets/images/NavbarLogo.png";

function Navbar() {
  const navItems = [
    { label: "Home" },
    { label: "Services" },
    { label: "Logo", renderCell: <img src={NavbarLogo} /> },
    { label: "About" },
    { label: "Contact" },
  ];
  return (
    <div className="navbar">
      {navItems.map((navItem) => {
        return navItem.renderCell ? (
          <div className="navItem">{navItem.renderCell}</div>
        ) : (
          <div className="navItem">{navItem.label}</div>
        );
      })}
    </div>
  );
}

export default Navbar;
