import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { propertyTypes } from "@/constants";

const PropertyType = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-32">
      <h1 className="text-gray-800 text-4xl font-bold mb-12 text-center md:text-left">
        Browse by Property Type
      </h1>

      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {propertyTypes.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="group relative rounded-3xl overflow-hidden h-80 md:h-96">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                      {item.name}
                    </h3>
                    <p className="text-base md:text-lg opacity-90 drop-shadow-md max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-12 -md:left-8 bg-white/90 hover:bg-white shadow-xl" />
          <CarouselNext className="-right-12 -md:right-8 bg-white/90 hover:bg-white shadow-xl" />
        </Carousel>
      </div>
    </div>
  );
};

export default PropertyType;
