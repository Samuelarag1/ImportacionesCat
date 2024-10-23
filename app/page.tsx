"use client";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Footer from "@/components/Footer";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

import banner1 from "/public/mens/banner1.webp";
import banner2 from "/public/mens/banner2.webp";

import chomba from "/public/mens/chomba.webp";
import chomba2 from "/public/mens/chomba2.webp";
import bermuda_blue from "/public/mens/bermuda-blue.webp";
import bermuda_green from "/public/mens/bermuda-green.webp";

import bermuda_gamir from "/public/mens/Bermuda-Gamir-Black.webp";
import remera_black from "/public/mens/remera-black.webp";
import zapas_premium from "/public/mens/zapas-premier.webp";
import remera_lacoste from "/public/mens/remera-lacoste.webp";

const products = [
  {
    id: "1",
    picture: chomba2,
    name: "Chomba",
    price: "40000",
    brand: "Penguin",
  },
  {
    id: "2",
    picture: bermuda_blue,
    name: "Bermuda",
    price: "35000",
    brand: "Bermuda premier",
  },
  { id: "3", picture: chomba, name: "Chomba", price: "52000", brand: "brand" },
  {
    id: "4",
    picture: bermuda_green,
    name: "Remera",
    price: "500",
    brand: "brand",
  },
];
const products2 = [
  {
    id: "5",
    picture: bermuda_gamir,
    name: "Bermuda",
    price: "25000",
    brand: "Gamir",
  },
  {
    id: "6",
    picture: zapas_premium,
    name: "Zapatillas",
    price: "52000",
    brand: "Puma",
  },
  {
    id: "7",
    picture: remera_black,
    name: "Remera",
    price: "35000",
    brand: "Balenciaga",
  },
  {
    id: "8",
    picture: remera_lacoste,
    name: "Remera",
    price: "25000",
    brand: "Lacoste",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className="min-h-screen w-screen">
      <div className="bg-black">
        <p className="text-xs text-center text-white lg:text-lg">
          Envios gratis a partir de los 80.000$
        </p>
      </div>
      <Header />

      <div className="min-h-screen overflow-hidden">
        <div className="relative h-fit">
          <div className="h-full w-full absolute flex justify-center  items-center m-0 z-10">
            <p className="text-white text-4xl font-bold font-body  drop-shadow-2xl shadow-black">
              Novedades
            </p>
          </div>
          <Banner src={banner1} alt="Banner Hombres" />
        </div>

        <Carousel
          responsive={responsive}
          ssr
          showDots
          infinite
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className="h-[350px] m-5 mt-0"
        >
          {products.map((product, index) => (
            <div className="m-2 flex" key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </Carousel>

        <div className="relative h-fit">
          <div className="h-full w-full absolute flex justify-center  items-center m-0 z-10">
            <p className="text-white text-4xl font-bold font-body  drop-shadow-2xl shadow-black">
              Novedades
            </p>
          </div>
          <Banner src={banner2} alt="Banner Hombres" />
        </div>

        <Carousel
          responsive={responsive}
          ssr
          showDots
          infinite
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className="h-[350px] m-5"
        >
          {products2.map((product, index) => (
            <div className="m-2 flex" key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </Carousel>
      </div>

      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />
      <Footer />
    </main>
  );
};

export default Home;
