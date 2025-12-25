import { offers, viewtabs } from "../constants/index.js";
import { ChevronRight, ChevronDown } from "lucide-react";
const OffersCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-8 space-y-2 px-32">
      <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
        <h2 className="text-3xl font-bold text-gray-800 flex-shrink-0">
          Offers
        </h2>

        <div className="flex items-center gap-5 text-sm font-medium">
          {viewtabs.map((tab) => (
            <a
              key={tab.label}
              href="#"
              className={`
                flex items-center gap-1 pb-1 transition-colors
                ${
                  tab.active
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }
              `}
            >
              {tab.label}
              {tab.hasChevron && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="text-blue-600 font-medium flex items-center gap-1 whitespace-nowrap hover:underline"
      >
        VIEW ALL
        <ChevronRight className="w-5 h-5" />
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
          >
            <div className="md:w-2/5 lg:w-1/3 flex-shrink-0">
              <img
                src={offer.imageUrl}
                alt={offer.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="p-5 md:p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    {offer.category}
                  </span>
                  <span className="text-xs text-gray-500">T&C'S APPLY</span>
                </div>

                <h3 className="text-md font-bold text-gray-800 mb-2 leading-tight">
                  {offer.title}
                </h3>

                {offer.description && (
                  <>
                    <div className="w-12 h-0.5 bg-red-500 my-3"></div>
                    <p className="text-xs text-gray-600">{offer.description}</p>
                  </>
                )}
              </div>

              <div className="mt-2">
                <a
                  href="/book-now"
                  className="text-blue-600 hover:text-blue-700 py-3.5"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersCard;
