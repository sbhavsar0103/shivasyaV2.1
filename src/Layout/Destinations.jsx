import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  { name: "USA", code: "US", path: "/usa-study", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop" },
  { name: "Canada", code: "CA", path: "/canada-study", image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg" },
  { name: "Australia", code: "AU", path: "/australia-study", image: "https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg" },
  { name: "New Zealand", code: "NZ", path: "/new-zealand-study", image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg" },
  { name: "UK", code: "GB", path: "/uk-study", image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg" },
  { name: "Ireland", code: "IE", path: "/ireland-study", image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" },
  { name: "Europe", code: "EU", path: "/europe-study", image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg" },
  { name: "Italy", code: "IT", path: "/italy-study", image: "https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg" },
  { name: "Russia", code: "RU", path: "/russia-study", image: "https://images.pexels.com/photos/32122785/pexels-photo-32122785.jpeg" },
];

const Destinations = () => {
  return (
    <section className="bg-[#FAF7F3] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#3A1F16] text-white px-6 py-3 mb-4 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
              <MapPin size={18} />
              <span>Choose Your Dream Destination</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#3A1F16] leading-tight">
              Let Us Help You Live Your Dream
            </h2>

            <p className="text-[#5A463F] mt-4 max-w-xl">
              Explore top countries for world-class education and bright career
              opportunities with our expert guidance.
            </p>
          </div>

          <button className="bg-[#3A1F16] hover:bg-[#D8752C] text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
            Apply Now
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              to={destination.path}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={`${destination.image}?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Study in ${destination.name}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold tracking-wide">
                    Study in {destination.name}
                  </h3>

                  <div className="mt-2 w-12 h-1 bg-[#D8752C] rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;