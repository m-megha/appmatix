import "./Services.css";
import Vector from "/assets/svg/Vector.svg";
import ServiceIcon from "/assets/images/ServiceIcon.png";
import Card from "./Card";

const Services = () => {
  const services = [
    {
      image: ServiceIcon,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: ServiceIcon,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: ServiceIcon,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: ServiceIcon,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="services">
      <img src={Vector} className="vector" />
      <div className="serviceContents">
        <h2>WHAT WE DO FOR YOU ?</h2>
        <h1 id="heading">Our Services</h1>
        <div className="cardsContainer">
          {services.map((service) => {
            return (
              <Card
                icon={service.image}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
