import React from "react";
import worldMap from "../assets/utility/map-of-world-1.png";

const locations = [
  { name: "Canada", top: "25%", left: "28%" },
  { name: "USA", top: "40%", left: "30%" },
  { name: "UK", top: "33%", left: "54%" },
  { name: "Germany", top: "36%", left: "56%" },
  { name: "France", top: "38%", left: "53%" },
  { name: "Dubai", top: "49%", left: "64%" },
  { name: "Australia", top: "75%", left: "82%" },
  { name: "New Zealand", top: "83%", left: "89%" },
];

const WorldMapSection = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="relative max-w-6xl mx-auto">
        <img
          src={worldMap}
          alt="World Map"
          className="w-full opacity-90"
        />

        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300/40 rounded-full blur-lg w-24 h-10" />
              <div className="relative bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold border border-orange-200 shadow-sm">
                ⦿ {loc.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-3xl font-bold text-gray-900">
            99 <span className="text-[#3D1F14] text-2xl">%</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">Visa Success Ratio</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-3xl font-bold text-gray-900">
            22,000 <span className="text-[#3D1F14] text-2xl">+</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">Students Enrolled</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-3xl font-bold text-gray-900">
            30,000 <span className="text-[#3D1F14] text-2xl">+</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">Students Counselled</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-3xl font-bold text-gray-900">
            16 <span className="text-[#3D1F14] text-2xl">+</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;