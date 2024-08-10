"use client";

import { useQuery } from "react-query";
import { useState, useEffect } from "react";

const fetchProducts = async () => {
  const res = await fetch("https://pandooin.com/api/zamrood/itinerary?highlight=true");
  return res.json();
};

const ImageSlider = ({ galleries }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentImageSrc = galleries[currentImageIndex]?.src;

  return (
    <div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video">
      <img
        alt="Destination Image"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        src={currentImageSrc}
        className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-100"
        sizes="100vw"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
        }}
      />
    </div>
  );
};

const Destinations = () => {
  const { data, error, isLoading } = useQuery("products", fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="bg-vista-white">
      <section id="destination" className="scroll-mt-20 p-4 lg:mt-[72px] w-full max-w-7xl mx-auto">
        <div className="py-6 w-full flex flex-col sm:flex-row items-start gap-6">
          <h1 className="my-auto w-fit text-left text-dark-teal font-unbounded font-bold text-[22px] lg:text-4xl">
            Destinations
          </h1>
          <div className="w-fit flex items-center">
            <a className="group w-fit inline-flex gap-4 items-center cursor-pointer" href="/destination">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-dark-teal group-hover:stroke-tan transition-colors ease-in-out duration-300"
              >
                <path
                  d="M17.6458 14.1471C17.8407 13.9515 18.1573 13.9509 18.3529 14.1458L23.8374 19.6108C24.0531 19.8257 24.0531 20.1751 23.8374 20.39L18.3529 25.855C18.1573 26.0499 17.8407 26.0493 17.6458 25.8537C17.4509 25.6581 17.4515 25.3415 17.6471 25.1466L22.8117 20.0004L17.6471 14.8542C17.4515 14.6593 17.4509 14.3427 17.6458 14.1471Z"
                  fill="#004040"
                ></path>
                <rect x="1" y="1" width="38" height="38" rx="19" strokeWidth="2"></rect>
              </svg>
              <span className="uppercase text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
                Explore more
              </span>
            </a>
          </div>
        </div>
        {data.data.map((destination, index) => (
          <div id="destination-list" className="w-full flex flex-col" key={index}>
            <div
              id="destination-card-landscape"
              className={`py-4 lg:py-[72px] w-full flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <ImageSlider galleries={destination.related_galleries.slice(0, 2)} />
              <div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4 text-center lg:text-left">
                <div className="w-full flex flex-col space-y-2">
                  <span className="text-left text-xs lg:text-base">
                    {destination.itinerary_day} DAYS {destination.itinerary_day - 1} NIGHTS
                  </span>
                  <strong className="text-left text-dark-aquaman text-base lg:text-4xl font-bold line-clamp-2">
                    {destination.itinerary_name}
                  </strong>
                  <span className="text-left text-dark-teal text-sm lg:text-base line-clamp-1 font-bold">
                    Organized by {destination.partner_name}
                  </span>
                  <p className="text-left text-sm lg:text-base text-dark-teal line-clamp-4">
                    {destination.itinerary_short_description}
                  </p>
                </div>
                <div className="mt-auto w-full inline-flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-left text-dark-teal text-xs lg:text-base">Start from</span>
                    <span className="text-left font-unbounded text-dark-teal text-lg lg:text-[28px] font-medium">
                      IDR{" "}
                      {Number(destination.related_variant.itinerary_variant_pub_price)
                        .toLocaleString("id-ID")
                        .replace(/\./g, ",")}
                    </span>
                  </div>
                  <a href={`destination/${destination.itinerary_slug}`}>
                    <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal">
                      See Details
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section id="destination-col" className="p-4 w-full max-w-7xl mx-auto">
        <div className="w-full py-6 inline-flex items-stretch space-x-[17px] lg:space-x-[22px] relative overflow-auto overflow-x-scroll">
          {data.data.map((destination, index) => (
            <>
              <div
                id="destination-card-potrait"
                key={index}
                className="min-w-[256px] max-w-full flex flex-1 flex-col justify-between space-y-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      alt="https://ik.imagekit.io/pandooin/tr:pr-true/production/images/itinerary/sunset-cruise-gili-islands/M5bqOu1FVZPavaeGbqMrr837upeC85qniQ83RNiY.jpg"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                      sizes="100vw"
                      src={destination.related_galleries[0].src}
                    />
                  </div>
                  <div className="lg:full flex flex-col justify-between space-y-6 text-center lg:text-left">
                    <div className="w-full flex flex-col space-y-1">
                      <span className="text-left text-xs">
                        {destination.itinerary_day} DAYS {destination.itinerary_day - 1} NIGHTS
                      </span>
                      <strong className="text-left text-dark-aquaman text-base font-bold line-clamp-2">
                        {destination.itinerary_name}
                      </strong>
                      <span
                        className="text-left text-dark-teal text-sm lg:text-base line-clamp-2 font-bold"
                        title="Organized by Pandooin"
                      >
                        Organized by {destination.partner_name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="mt-auto flex flex-col">
                    <span className="text-left text-dark-teal text-xs lg:text-base">Start from</span>
                    <span className="text-left font-unbounded text-dark-teal text-base font-medium">
                      IDR{" "}
                      {Number(destination.related_variant.itinerary_variant_pub_price)
                        .toLocaleString("id-ID")
                        .replace(/\./g, ",")}
                    </span>
                  </div>
                  <a className="w-fit" href="/destination/sunset-cruise-gili-islands">
                    <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal ">
                      See Details
                    </button>
                  </a>
                </div>
              </div>
              <div
                id="destination-card-potrait"
                key={index}
                className="min-w-[256px] max-w-full flex flex-1 flex-col justify-between space-y-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      alt="https://ik.imagekit.io/pandooin/tr:pr-true/production/images/itinerary/sunset-cruise-gili-islands/M5bqOu1FVZPavaeGbqMrr837upeC85qniQ83RNiY.jpg"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                      sizes="100vw"
                      src={destination.related_galleries[1].src}
                    />
                  </div>
                  <div className="lg:full flex flex-col justify-between space-y-6 text-center lg:text-left">
                    <div className="w-full flex flex-col space-y-1">
                      <span className="text-left text-xs">
                        {destination.itinerary_day} DAYS {destination.itinerary_day - 1} NIGHTS
                      </span>
                      <strong className="text-left text-dark-aquaman text-base font-bold line-clamp-2">
                        {destination.itinerary_name}
                      </strong>
                      <span
                        className="text-left text-dark-teal text-sm lg:text-base line-clamp-2 font-bold"
                        title="Organized by Pandooin"
                      >
                        Organized by {destination.partner_name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="mt-auto flex flex-col">
                    <span className="text-left text-dark-teal text-xs lg:text-base">Start from</span>
                    <span className="text-left font-unbounded text-dark-teal text-base font-medium">
                      IDR{" "}
                      {Number(destination.related_variant.itinerary_variant_pub_price)
                        .toLocaleString("id-ID")
                        .replace(/\./g, ",")}
                    </span>
                  </div>
                  <a className="w-fit" href="/destination/sunset-cruise-gili-islands">
                    <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal ">
                      See Details
                    </button>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto py-[54px] lg:py-[26px] px-4">
        <div className="w-full inline-flex justify-center lg:justify-end">
          <a className="group w-fit inline-flex gap-4 items-center cursor-pointer" href="/destination">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-dark-teal group-hover:stroke-tan transition-colors ease-in-out duration-300"
            >
              <path
                d="M17.6458 14.1471C17.8407 13.9515 18.1573 13.9509 18.3529 14.1458L23.8374 19.6108C24.0531 19.8257 24.0531 20.1751 23.8374 20.39L18.3529 25.855C18.1573 26.0499 17.8407 26.0493 17.6458 25.8537C17.4509 25.6581 17.4515 25.3415 17.6471 25.1466L22.8117 20.0004L17.6471 14.8542C17.4515 14.6593 17.4509 14.3427 17.6458 14.1471Z"
                fill="#004040"
              ></path>
              <rect x="1" y="1" width="38" height="38" rx="19" stroke-width="2"></rect>
            </svg>
            <span className="uppercase text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
              Explore more
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
