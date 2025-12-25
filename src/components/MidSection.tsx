import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { weekendDeals, guestFavorites, uniqueProperties } from "@/constants";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "@/components/ui/separator";
interface MidSectionProps { homes: any[]; }  // {id: uuid, price, image, etc.}

const MidSection = ()=> {
  return (
    <div>
      <section className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Deals for the Weekend
          </h2>
          <p className="text-gray-500 mb-6">
            Save on stays for December 26 - December 28
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {weekendDeals.map((deal) => (
              <Card key={deal.id} className="rounded-3xl py-4 gap-0 w-78">
                <div
                  
                  className="group relative -top-[23.5px] rounded-t-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={deal.imageUrl}
                    alt={deal.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <Button className="rounded-full absolute top-6 right-6 bg-white shadow-lg hover:bg-white cursor-pointer hover:shadow-xl">
                    <HeartIcon className="text-gray-900" />
                  </Button>
                </div>
                <CardContent className="text-gray-800 px-4">
                  <Badge className="rounded-lg bg-blue-800 text-white px-3 py-1 mb-2">
                    TVX Luxe
                  </Badge>
                  <h3 className="text-xl font-bold mb-1">{deal.name}</h3>
                  <h3 className="text-xs text-gray-500 mb-2">{deal.place}</h3>

                  <div className="flex flex-1 justify-left mb-2">
                    <Button className="bg-blue-900 text-white my-1 p-2 ">
                      {deal.reviewPoint}
                    </Button>
                    <div className="ml-2 mt-1">
                      <h3 className="text-gray-800 text-sm">{deal.review}</h3>
                      <p className="text-gray-600 text-xs">
                        {deal.totalReviews}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-600 rounded-sm text-white mb-2">
                    Late Escape Deal
                  </Badge>
                  <p className="text-xs line-clamp-3 mb-4">
                    {deal.description}
                  </p>
                  <div className="justify-end gap-2 justify-items-center flex flex-1">
                    <p className="text-gray-500 text-sm">2 Nights</p>
                    <p className="text-red-500 line-through pb-1">
                      {deal.fakePrice}
                    </p>
                    <p className="text-sm font-bold">{deal.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stay at our Top Unique Properties
          </h2>
          <p className="text-gray-500 mb-6">
            From castles and villas to boats and igloos, we have it all
          </p>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {uniqueProperties.map((prop) => (
                <CarouselItem
                  key={prop.id}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Card className="rounded-3xl py-4 gap-0 w-78">
                    <div className="group relative -top-[16px] rounded-t-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <img
                        src={prop.imageUrl}
                        alt={prop.name}
                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <CardContent className="text-gray-800 px-4">
                      <h3 className="text-lg font-bold">{prop.name}</h3>
                      <h3 className="text-xs text-gray-500 mb-1">
                        {prop.place}
                      </h3>

                      <div className="flex flex-1 justify-left mb-2">
                        <Button className="bg-blue-900 text-white my-1 p-2 ">
                          {prop.reviewPoint}
                        </Button>
                        <div className="ml-2 mt-1">
                          <h3 className="text-gray-800 text-sm">
                            {prop.review}
                          </h3>
                          <p className="text-gray-600 text-xs">
                            {prop.totalReviews}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-22 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between flex-1 gap-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Homes Guests Love
            </h2>
            <a
              href="/discover-homes"
              className="text-blue-500 hover:text-blue-600 mb-6 pt-2"
            >
              {" "}
              Discover homes
            </a>
          </div>
          <Carousel opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {guestFavorites.map((home) => (
                <CarouselItem
                  key={home.id}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Card className="h-[420px] rounded-3xl overflow-hidden flex flex-col gap-0">
                    <div className="relative">
                      <img
                        src={home.imageUrl}
                        alt={home.name}
                        className="w-full h-64 relative -top-[25px] object-cover cursor-pointer"
                      />
                      <div className="absolute top-0 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold">
                        {home.rating}
                      </div>
                    </div>

                    <CardContent className="text-gray-800 px-4 flex flex-col h-full">
                      <h3 className="text-lg font-bold">{home.name}</h3>

                      <h3 className="text-xs text-gray-500 mb-1 mt-2">
                        {home.place}
                      </h3>

                      <p className="text-sm text-gray-700 mt-auto text-right">
                        Starting from <span className="text-gray-900 text-lg font-bold ml-1">{home.price}</span>
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      <Separator />

    </div>
  );
};

export default MidSection;
