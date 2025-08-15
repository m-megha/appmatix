import "./Story.css";
import Appmatix from "/assets/images/Appmatix.png";
import A from "/assets/images/A.png";

const Story = () => {
  return (
    <div className="story" id="story">
      <div className="storyContents">
        <img className="logoImage" src={A} />
        <div className="title">
          <h1>Story Of</h1>
          <img src={Appmatix} />
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Story;
