"use client";

import { useQuery } from "react-query";
import { useState, useEffect } from "react";

const fetchProducts = async () => {
  const res = await fetch("https://pandooin.com/api/zamrood/itinerary?highlight=true");
  return res.json();
};

const LuxuryFootages = () => {
  const { data, error, isLoading } = useQuery("products", fetchProducts);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const footages = data.data[0].related_galleries;

  return (
    <div className="bg-vista-white">
      <section id="luxury-footages" className="bg-tan lg:mt-[72px]">
        <div
          id="wrapper"
          className="pt-12 p-9 lg:py-[72px] lg:pt-[84px] w-full max-w-7xl mx-auto lg:text-left flex flex-col space-y-6"
        >
          <h1 className="font-the-signature text-[52px] lg:text-[72px] text-dark-teal">Luxury Footages</h1>
          <div className="block lg:hidden relative w-full aspect-[356/256]">
            {footages.map((footage, index) => (
              <img
                key={index}
                alt={`Zamrood Luxury Footage ${index + 1}`}
                loading="lazy"
                decoding="async"
                className={`object-cover object-center transition-opacity ease-in-out duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
                sizes="100vw"
                src={footage.src}
              />
            ))}
          </div>
          <div className="hidden w-full lg:grid grid-cols-3 gap-6">
            {footages.slice(0, 3).map((footage, index) => (
              <div key={index} className="relative w-full aspect-square cursor-pointer">
                <img
                  alt={`Zamrood Luxury Footage ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-center"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
                  sizes="100vw"
                  src={footage.src}
                />
              </div>
            ))}
          </div>
          <div className="col-span-full hidden lg:block">
            <svg
              className="w-full"
              width="1096"
              height="97"
              viewBox="0 0 1096 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M802.25 48.4692L791.509 36.406L780.768 48.4692L791.509 60.5325L802.25 48.4692Z"
                fill="#FAF9F5"
              ></path>
              <path
                d="M315.244 48.4732L304.503 36.4099L293.762 48.4732L304.503 60.5364L315.244 48.4732Z"
                fill="#FAF9F5"
              ></path>
              <path
                d="M36.0919 48.4672L29.3867 40.9365L22.6816 48.4672L29.3867 55.9979L36.0919 48.4672Z"
                fill="#FAF9F5"
              ></path>
              <path
                d="M1073.33 48.4711L1066.62 40.9404L1059.92 48.4711L1066.63 56.0018L1073.33 48.4711Z"
                fill="#FAF9F5"
              ></path>
              <path d="M354.646 38.3299L350.906 28.3599L335.681 47.2799H347.443L354.646 38.3299Z" fill="#FAF9F5"></path>
              <path d="M346.971 49.0898H335.209L350.915 68.5898L354.788 58.7998L346.971 49.0898Z" fill="#FAF9F5"></path>
              <path d="M356.267 59.5298L352.394 69.3298H539.319L530.602 59.5298H356.267Z" fill="#FAF9F5"></path>
              <path d="M739.975 59.5298H565.639L556.913 69.3298H743.848L739.975 59.5298Z" fill="#FAF9F5"></path>
              <path d="M749.029 47.5699H760.791L745.325 28.3599L741.595 38.3199L749.029 47.5699Z" fill="#FAF9F5"></path>
              <path d="M740.188 37.4099L743.857 27.6099H556.913L565.639 37.4099H740.188Z" fill="#FAF9F5"></path>
              <path d="M352.375 27.6099L356.052 37.4099H530.602L539.318 27.6099H352.375Z" fill="#FAF9F5"></path>
              <path
                d="M567.25 57.7197H740.134L747.587 48.4697L740.134 39.2197H567.25L575.486 48.4697L567.25 57.7197Z"
                fill="#FAF9F5"
              ></path>
              <path
                d="M528.981 39.2197H356.097L348.653 48.4697L356.097 57.7197H528.99L520.745 48.4697L528.981 39.2197Z"
                fill="#FAF9F5"
              ></path>
              <path d="M741.443 58.7999L745.317 68.5899L760.791 49.3799H749.029L741.443 58.7999Z" fill="#FAF9F5"></path>
              <path
                d="M548.135 35.2788L536.368 48.4946L548.135 61.7105L559.902 48.4946L548.135 35.2788Z"
                fill="#FAF9F5"
              ></path>
              <path d="M547.119 63.7298L534.529 49.5898H524.557L547.119 74.9298V63.7298Z" fill="#FAF9F5"></path>
              <path d="M549.113 33.2098L561.703 47.3498H571.675L549.113 22.0098V33.2098Z" fill="#FAF9F5"></path>
              <path d="M547.119 33.2098V22.0098L524.557 47.3498H534.529L547.119 33.2098Z" fill="#FAF9F5"></path>
              <path d="M549.113 63.7298V74.9298L571.675 49.5898H561.703L549.113 63.7298Z" fill="#FAF9F5"></path>
              <path d="M791.509 48.4697H1066.62" stroke="#FAF9F5" stroke-width="3.9" stroke-miterlimit="10"></path>
              <path d="M29.3828 48.4697H304.491" stroke="#FAF9F5" stroke-width="3.9" stroke-miterlimit="10"></path>
            </svg>
          </div>
          <div className="hidden w-full lg:grid grid-cols-3 gap-6">
            {footages.slice(3, 6).map((footage, index) => (
              <div key={index} className="relative w-full aspect-square cursor-pointer">
                <img
                  alt={`Zamrood Luxury Footage ${index + 4}`}
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-center"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
                  sizes="100vw"
                  src={footage.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pandooin-website" className="py-[54px] lg:pb-0 px-4 w-full max-w-7xl mx-auto">
        <div
          className="w-full p-6 flex flex-col lg:flex-row space-y-2 justify-between items-center bg-[lightgray] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url("/images/Background-zamrood-2.webp")',
          }}
        >
          <img
            alt="Pandooin Zamrood Logo White"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="h-[54px] w-auto "
            sizes="100vw"
            src="https://www.zamrood.com/_next/image?url=%2Fimages%2FLogo-Zamrood-White.png&amp;w=3840&amp;q=75"
            style={{
              color: "transparent",
            }}
          />
          <div className="flex flex-col space-y-2 justify-center lg:justify-end text-right">
            <p className="text-vista-white text-base text-center lg:text-right">
              Want to see other destinations? Check us out at our website
            </p>
            <a
              target="_blank"
              className="text-vista-white inline-flex items-center justify-center lg:justify-end gap-2"
              href="https://pandooin.com"
            >
              <span className="text-xl font-bold underline">Pandooin.com</span>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 16.013L15.8333 5.17969M15.8333 5.17969V15.5797M15.8333 5.17969H5.43333"
                  stroke="#FAF9F5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryFootages;
