import "./About.css";
import LineGroup from "/assets/images/LineGroup.png";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <img id="lineGroup1" src={LineGroup} />
        <img id="lineGroup2" src={LineGroup} />
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h1>
        <img id="lineGroup3" src={LineGroup} />
        <img id="lineGroup4" src={LineGroup} />
      </div>
    </div>
  );
};

export default About;
