import "./About.css";
import LineGroup from "/assets/images/LineGroup.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const splitText = new SplitText("#text", {
        type: "chars",
      });

      const characters = splitText.chars;
      gsap.from(characters, {
        opacity: 0,
        stagger: 0.04,
        ease: "back.out",
        duration: 1,
        scrollTrigger: {
          trigger: "#text",
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="about" ref={container} id="about">
      <div className="content">
        <img id="lineGroup1" src={LineGroup} />
        <img id="lineGroup2" src={LineGroup} />
        <h1 id="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h1>
        <img id="lineGroup3" src={LineGroup} />
        <img id="lineGroup4" src={LineGroup} />
      </div>
      <div id="blueCircle" />
      <div id="greenCircle" />
    </div>
  );
};

export default About;
