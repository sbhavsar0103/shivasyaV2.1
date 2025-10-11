import React from "react";

export default function CostOfLivingRussia() {
  const costs = [
    {
      particular: "Meals",
      cost: "Rs. 636.91 (RUB 700)",
    },
    {
      particular: "Accommodation (varies as per choice)",
      cost: "Rs. 22.9K (RUB 25,084.65) to Rs. 34.3K (RUB 37,632.67)",
    },
    {
      particular: "Transportation (Monthly Pass)",
      cost: "Rs. 2.3K (RUB 2,500)",
    },
    {
      particular: "Utility",
      cost: "Rs. 7.5K (RUB 8,176.39)",
    },
  ];

  return (
    <section className="w-full bg-[#C12025] text-white py-16 px-4 sm:px-6 lg:px-16 mb-5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Cost of Living to study in Russia
        </h2>
        <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8">
          The cost of living in Russia generally varies depending on various
          factors like accommodation type, food choices, lifestyle, personal
          expenses, travel and many more. Although Study in Russia for
          international students is basically affordable and convenient, for the
          estimated cost of living, check the table below for reference.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-6">
          Estimated cost of living in Russia
        </h3>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-white border-opacity-50 text-left text-white">
            <thead className="bg-[#B91C1C] text-white">
              <tr>
                <th className="border border-white border-opacity-50 px-4 py-3 font-semibold">
                  Particular
                </th>
                <th className="border border-white border-opacity-50 px-4 py-3 font-semibold">
                  Cost of living
                </th>
              </tr>
            </thead>
            <tbody>
              {costs.map((item, index) => (
                <tr key={index} className="hover:bg-[#b11d1d] transition">
                  <td className="border border-white border-opacity-50 px-4 py-3">
                    {item.particular}
                  </td>
                  <td className="border border-white border-opacity-50 px-4 py-3">
                    {item.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
