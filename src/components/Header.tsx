import "./Header.css";
import Appmatix from "/assets/images/Appmatix.png";
import A from "/assets/images/A.png";
import Ellipsis from "/assets/svg/Ellipsis.svg";
import Navbar from "./Navbar";
import Actions from "./Actions";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Actions />
      <img className="ellipsis" src={Ellipsis} />
      <img className="fadedLogo" src={A} />
      <img className="fadedLogo2" src={A} />
      <div className="contents">
        <img src={Appmatix} />
        <h1 id="subtitle">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, sed.
        </h1>
      </div>
    </div>
  );
};

export default Header;
