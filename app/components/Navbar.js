"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("homepage");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateActiveTab = () => {
    const hash = window.location.hash;

    if (hash === "#discover-tailored-experiences") {
      setActiveTab("customize");
    } else if (hash === "#destination") {
      setActiveTab("destination");
    } else if (hash === "#article") {
      setActiveTab("article");
    } else {
      setActiveTab("homepage");
    }
  };

  useEffect(() => {
    updateActiveTab();

    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }

    window.addEventListener("hashchange", updateActiveTab);
    return () => {
      window.removeEventListener("hashchange", updateActiveTab);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 bg-vista-white w-full inline-flex justify-center shadow-md font-sans">
      <div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
        <a href="/">
          <img
            alt="Pandooin Zamrood Logo"
            fetchPriority="high"
            loading="eager"
            width="135"
            height="50"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            sizes="30vw"
            src="https://www.zamrood.com/_next/image?url=%2Fimages%2FLogo-Zamrood.png&w=640&q=75"
          />
        </a>
        <div className="inline-flex items-center gap-6 font-sans">
          <div className="hidden lg:inline-flex items-center gap-6 font-sans">
            <Link
              href="/"
              className={`px-6 py-2.5 text-dark-aquaman text-base font-bold ${
                activeTab === "homepage"
                  ? "border-b-dark-teal border-b-[2px]"
                  : "hover:border-b-dark-teal hover:border-b-[2px]"
              }`}
              onClick={() => handleTabClick("homepage")}
            >
              Homepage
            </Link>
            <Link
              href="/#discover-tailored-experiences"
              className={`px-6 py-2.5 text-dark-aquaman text-base font-bold ${
                activeTab === "customize"
                  ? "border-b-dark-teal border-b-[2px]"
                  : "hover:border-b-dark-teal hover:border-b-[2px]"
              }`}
              onClick={() => handleTabClick("customize")}
            >
              Customize Your Trip
            </Link>
            <Link
              href="/#destination"
              className={`px-6 py-2.5 text-dark-aquaman text-base font-bold ${
                activeTab === "destination"
                  ? "border-b-dark-teal border-b-[2px]"
                  : "hover:border-b-dark-teal hover:border-b-[2px]"
              }`}
              onClick={() => handleTabClick("destination")}
            >
              Destination
            </Link>
            <Link
              href="/#article"
              className={`px-6 py-2.5 text-dark-aquaman text-base font-bold ${
                activeTab === "article"
                  ? "border-b-dark-teal border-b-[2px]"
                  : "hover:border-b-dark-teal hover:border-b-[2px]"
              }`}
              onClick={() => handleTabClick("article")}
            >
              Article
            </Link>
            <a
              href="https://wa.me/6283831556160?text=Hi, I wanna ask question about Zamrood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal">
                Need Assistance?
              </button>
            </a>
          </div>

          <div className="flex lg:hidden">
            <div onClick={toggleMenu}>
              <svg
                className="cursor-pointer"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9639 18.9623H39.9639"
                  stroke="#337172"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.9639 27.9623H39.9639"
                  stroke="#337172"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.9639 36.9623H39.9639"
                  stroke="#337172"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <rect
                  x="1"
                  y="1"
                  width="54"
                  height="54"
                  rx="27"
                  stroke="#337172"
                  strokeWidth="2"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-900/80 flex justify-end">
          <div className="w-[calc(100vw-72px)] flex flex-col gap-y-5 bg-white p-4 text-right">
            <div className="w-full h-[51px]"></div>
            <div className="w-full inline-flex justify-end">
              <svg
                onClick={toggleMenu}
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M13.2825 13.584L13.4227 13.4227C13.6665 13.1788 13.9897 13.0305 14.3336 13.0048C14.6775 12.9791 15.0192 13.0777 15.2966 13.2825L15.4578 13.4227L25 22.9629L34.5422 13.4208C34.7862 13.1772 35.1096 13.0293 35.4534 13.0039C35.7973 12.9785 36.1389 13.0774 36.416 13.2825L36.5773 13.4227C36.8212 13.6665 36.9694 13.9897 36.9952 14.3336C37.0209 14.6775 36.9223 15.0192 36.7175 15.2966L36.5773 15.4578L27.0371 25L36.5792 34.5422C36.8228 34.7862 36.9707 35.1096 36.9961 35.4534C37.0215 35.7973 36.9226 36.1389 36.7175 36.416L36.5773 36.5773C36.3335 36.8212 36.0103 36.9694 35.6664 36.9952C35.3225 37.0209 34.9808 36.9223 34.7034 36.7175L34.5422 36.5773L25 27.0371L15.4578 36.5792C15.2138 36.8228 14.8904 36.9707 14.5466 36.9961C14.2027 37.0215 13.8611 36.9226 13.584 36.7175L13.4227 36.5773C13.1788 36.3335 13.0305 36.0103 13.0048 35.6664C12.9791 35.3225 13.0777 34.9808 13.2825 34.7034L13.4227 34.5422L22.9629 25L13.4208 15.4578C13.1772 15.2138 13.0293 14.8904 13.0039 14.5466C12.9785 14.2027 13.0774 13.8611 13.2825 13.584Z"
                  fill="#0B7373"
                ></path>
                <rect
                  x="1"
                  y="1"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#0B7373"
                  strokeWidth="2"
                ></rect>
              </svg>
            </div>
            <div className="mt-[156px] flex flex-col space-y-6">
              <Link
                href="/"
                className="px-6 py-2.5 text-dark-aquaman text-base"
                onClick={() => {
                  handleTabClick("homepage");
                  toggleMenu();
                }}
              >
                Homepage
              </Link>
              <Link
                href="/#discover-tailored-experiences"
                className="px-6 py-2.5 text-dark-aquaman text-base"
                onClick={() => {
                  handleTabClick("customize");
                  toggleMenu();
                }}
              >
                Customize Your Trip
              </Link>
              <Link
                href="/#destination"
                className="px-6 py-2.5 text-dark-aquaman text-base"
                onClick={() => {
                  handleTabClick("destination");
                  toggleMenu();
                }}
              >
                Destination
              </Link>
              <Link
                href="/#article"
                className="px-6 py-2.5 text-dark-aquaman text-base"
                onClick={() => {
                  handleTabClick("article");
                  toggleMenu();
                }}
              >
                Article
              </Link>
              <a
                href="https://wa.me/6283831556160?text=Hi, I wanna ask question about Zamrood"
              >
                <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal w-fit ml-auto">
                  Need Assistance?
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;