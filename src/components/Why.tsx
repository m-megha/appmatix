"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Why.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Why = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const items = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
            markers: false,
          },
        })
        // card-1 goes back, card-2 comes in front, card-3 comes to center
        .to("#card-1", { zIndex: 1, rotation: 0 })
        .to("#card-3", { zIndex: 2, rotation: -6 }, "<")
        .to("#card-2", { zIndex: 3, rotation: -13 }, "<")
        // card-2 goes back, card-3 comes in front, card-1 comes in center
        .to("#card-2", { zIndex: 1, rotation: 0 })
        .to("#card-3", { zIndex: 3, rotation: -13 }, "<")
        .to("#card-1", { zIndex: 2, rotation: -6 }, "<");
    },
    { scope: container }
  );

  return (
    <div className="why" ref={container} id="why">
      <div className="grid">
        <div className="blueDot"></div>
        <div ref={wrapper}>
          <div ref={items}>
            <div id="card-1" className="flip-card"></div>
            <div id="card-2" className="flip-card"></div>
            <div id="card-3" className="flip-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
