import { Card } from "@/components/ui/card";
import {
  hotels,
} from "../constants/index.js";

const MainSection = () => {
  return (
     <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gray-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Experience Flying with our Airline Partners
              </h1>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center w-full">
                <img
                  src="../assets/card-1.png"
                  className="cursor-pointer"
                  alt="AirAsia"
                />
                <img
                  src="../assets/card-2.png"
                  className="cursor-pointer"
                  alt="Etihad Airways"
                />
                <img
                  src="../assets/card-3.png"
                  className="cursor-pointer"
                  alt="Malaysia Airlines"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-7xl mx-auto pt-22">
          <Card className="bg-gradient-to-br from-purple-50/70 to-pink-50/70 border-0 shadow-2xl rounded-3xl overflow-hidden">
            <div className="pl-8">
              {/* Title + Logos Row */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Title on Left */}
                <h1 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900 leading-tight text-center lg:text-left flex-shrink-0">
                  Flagship Hotel
                  <br />
                  Stores on
                  <br />
                  Travixle
                </h1>
                <div className="flex-1">
                  <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                    <div className="flex items-center gap-8 md:gap-8">
                      {hotels.map((hotel) => (
                        <div
                          key={hotel.id}
                          className="group flex flex-col items-center gap-4 flex-shrink-0"
                        >
                          <div className="flex items-center justify-center w-52 h-40">
                            <img
                              src={hotel.imageUrl}
                              alt={hotel.title || hotel.title}
                              className="object-contain rounded-lg cursor-pointer"
                            />
                          </div>
                          <p className="text-sm md:text-base font-semibold text-gray-800 ">
                            {hotel.title || hotel.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
  )
}

export default MainSection