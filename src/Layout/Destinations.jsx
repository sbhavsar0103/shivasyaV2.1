import { MapPin } from "lucide-react";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: "Study in Canada",
      image:
        "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Study in UK",
      image:
        "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Study in USA",
      image:
        "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Study in Australia",
      image:
        "https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Study in Germany",
      image:
        "https://images.pexels.com/photos/208521/pexels-photo-208521.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Study in France",
      image:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 7,
      title: "Study in New Zealand",
      image:
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 8,
      title: "Study in Dubai",
      image:
        "https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-14 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#3A1F16] text-white px-6 py-3 mb-4 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
              <MapPin size={18} className="text-white" />
              <span>Choose Your Dream Destination</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Let Us Help You Live Your Dream
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl">
              Explore top countries for world-class education and bright career
              opportunities with our expert guidance.
            </p>
          </div>

          <button className="bg-[#3A1F16] hover:bg-[#D8752C] text-white px-8 py-4 font-semibold tracking-wide rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            Apply Now
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
                    {destination.title}
                  </h3>
                  <div className="mt-2 w-12 h-1 bg-[#D8752C] rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
