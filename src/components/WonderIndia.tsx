import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { destinations, wonders } from "@/constants";

const WonderIndia = () => {
  return (
    <div className="space-y-6 px-32">
      <h1 className="text-gray-800 text-3xl font-bold">
        Unlock Lesser-Known Wonders of India
      </h1>
      <div className="w-full px-2">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {wonders.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="group h-full">
                  <Card className="h-64 relative rounded-lg bottom-[22px] overflow-hidden border-0  hover:shadow-2xl transition-all duration-500">
                    <div className="relative rounded-lg h-64 md:h-84 lg:h-[26rem] overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </Card>
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

export default WonderIndia;
