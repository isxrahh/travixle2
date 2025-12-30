import { cities, destinations } from "@/constants";
import Link from "next/link";

const TrendingCities = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured Destinations
        </h2>
        <p className="text-gray-500 mb-8">
          Most popular choices for travelers from India
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cities.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="group relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-2xl">
                  {item.name}
                </h3>
                <Link
                  key={item.id}
                  href={`/destinations/${item.name}`}
                  target="_blank"
                   rel="noopener noreferrer"
                  className="mt-6 inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition"
                >
                  Explore Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {cities.slice(2, 5).map((item) => (
            <div
              key={item.id}
              className="group relative h-48 md:h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-2xl">
                  {item.name}
                </h3>
                 <Link
                  key={item.id}
                  href={`/destinations/${item.name}`}
                  target="_blank"
                   rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full font-medium hover:bg-white/30 transition"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCities;
