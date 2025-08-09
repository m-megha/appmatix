import Contact from "./Contact";
import "./Footer.css";
import Links from "./Links";
import Logo from "/logo.jpg";
import Facebook from "/assets/svg/Facebook.svg";
import Instagram from "/assets/svg/Instagram.svg";
import X from "/assets/svg/X.svg";
import Youtube from "/assets/svg/Youtube.svg";

const Footer = () => {
  const quickLinks = {
    title: "Quick Link",
    list: [
      { label: "Home", path: "#home" },
      { label: "About Us", path: "#about" },
      { label: "Contact Us", path: "#contact" },
    ],
  };

  const services = {
    title: "Services",
    list: [
      { label: "Application Modernization", path: "#services" },
      { label: "Web Application Development", path: "#services" },
      { label: "Mobile Application Development", path: "#services" },
    ],
  };

  const socialMedia = [
    { icon: Facebook, link: "https://facebook.com/appmatix" },
    { icon: Instagram, link: "https://instagram.com/appmatix" },
    { icon: X, link: "https://x.com/appmatix" },
    { icon: Youtube, link: "https://youtube.com/appmatix" },
  ];

  return (
    <footer>
      <div className="info">
        <div>
          <img src={Logo} />
          <p>Scale up your business with innovative digital experiences</p>
        </div>
        <Links title={quickLinks.title} list={quickLinks.list} />
        <Links title={services.title} list={services.list} />
        <Contact />
      </div>
      <hr />
      <div className="copyright">
        <div>
          &copy;{new Date().getFullYear()} APPMATIX | All Rights Reserved
        </div>
        <ul>
          {socialMedia.map((item) => (
            <li>
              <a href={item.link} target="_blank">
                <img src={item.icon} height={40} width={40} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
