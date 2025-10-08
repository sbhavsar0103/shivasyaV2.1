import React, { useEffect, useRef } from "react";

import ANU from "../assets/universities/ANU.jpg";
import ASU from "../assets/universities/ASU.jpg";
import Auburn from "../assets/universities/Auburn.jpg";
import BritishColumbiaInstituteofTechnology from "../assets/universities/British-Columbia-Institute-of-Technology.jpg";
import Brunel from "../assets/universities/brunel.jpg";
import California from "../assets/universities/california.jpg";
import CapeBreton from "../assets/universities/cape-breton.jpg";
import Colorado from "../assets/universities/colorado.jpg";
import Concordia from "../assets/universities/concordia.jpg";
import Coventry from "../assets/universities/coventry.jpg";

export default function TrainingSection() {
  const containerRef = useRef(null);

  const universities = [
    Brunel,
    California,
    CapeBreton,
    Colorado,
    Concordia,
    Coventry,
    ANU,
    ASU,
    Auburn,
    BritishColumbiaInstituteofTechnology,
  ];

  const loopedUniversities = [...universities, ...universities];

  useEffect(() => {
    const container = containerRef.current;
    let scrollPosition = 0;

    const scrollSpeed = 1;
    const intervalDelay = 20;
    const resetPoint = container.scrollWidth / 2;

    const interval = setInterval(() => {
      if (!container) return;
      scrollPosition += scrollSpeed;
      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, intervalDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D1F14]">
            WE WILL HELP FIND THE PERFECT FIT
          </h2>
        </div>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-hidden whitespace-nowrap"
        >
          {loopedUniversities.map((uni, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 sm:w-44 md:w-48 rounded-lg shadow-lg bg-white flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={uni}
                alt={`university-${index}`}
                className="object-contain h-20 sm:h-24 md:h-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
