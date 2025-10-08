import React, { useEffect, useRef } from "react";

export default function AwardsRecognition() {
  const containerRef = useRef(null);

  const images = [
    "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  // Duplicate images for infinite scrolling
  const loopedImages = [...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    let scrollPosition = 0;

    const scrollSpeed = 1; // pixels per interval
    const intervalDelay = 20; // ms
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
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Awards & Recognition
        </h2>

        <div
          ref={containerRef}
          className="flex gap-8 overflow-hidden whitespace-nowrap"
        >
          {loopedImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] h-[220px] overflow-hidden rounded-xl shadow-lg bg-white flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`Certificate ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}