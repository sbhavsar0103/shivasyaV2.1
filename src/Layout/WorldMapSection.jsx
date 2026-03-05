import React from "react";
import worldMap from "../assets/utility/map-of-world-1.png";
import ReactCountryFlag from "react-country-flag";

const locations = [
  { name: "Canada", code: "CA", top: "25%", left: "28%" },
  { name: "USA", code: "US", top: "40%", left: "30%" },
  { name: "UK", code: "GB", top: "33%", left: "54%" },
  { name: "France", code: "FR", top: "38%", left: "53%" },
  { name: "Ireland", code: "IE", top: "43%", left: "52%" },
  { name: "Italy", code: "IT", top: "50%", left: "57%" },
  { name: "Australia", code: "AU", top: "75%", left: "82%" },
  { name: "Russia", code: "RU", top: "30%", left: "82%" },
  { name: "New Zealand", code: "NZ", top: "83%", left: "89%" },
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
            style={{
              top: loc.top,
              left: loc.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300/40 rounded-full blur-lg w-24 h-10" />
              <div className="relative bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold border border-orange-200 shadow-sm flex items-center gap-2">

                <ReactCountryFlag countryCode={loc.code} svg style={{ width: "1.5em", height: "1.5em" }} title={loc.name} />
                {loc.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldMapSection;