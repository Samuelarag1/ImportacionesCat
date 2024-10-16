"use client";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Footer from "@/components/Footer";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";
import { useEffect, useState } from "react";

import banner1 from "/public/mens/banner1.webp";
import women2 from "/public/women2.png";
import women from "/public/women.png";
import men1 from "/public/mens/men1.png";
import camperas from "/public/camperas.png";

const products = [
  { imageSrc: women, title: "Remera", price: "1500", brand: "brand" },
  { imageSrc: women2, title: "Remera", price: "5200", brand: "brand" },
  { imageSrc: men1, title: "Remera", price: "3500", brand: "brand" },
  { imageSrc: camperas, title: "Remera", price: "500", brand: "brand" },
];

const ProductCarousel: React.FC<{ visibleSlides: number }> = ({
  visibleSlides,
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={25}
      totalSlides={products.length}
      visibleSlides={visibleSlides}
      infinite={true}
      className="relative mt-10 max-w-3xl mx-auto"
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center z-10">
          <ButtonBack className="p-2 rounded-full">
            <IoChevronBackCircleSharp color="black" size={32} />
          </ButtonBack>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-10">
          <ButtonNext className="p-2 rounded-full">
            <IoChevronForwardCircleSharp size={32} />
          </ButtonNext>
        </div>

        <Slider className="overflow-hidden m-8">
          {products.map((product, index) => (
            <Slide key={index} index={index}>
              <ProductCard {...product} />
            </Slide>
          ))}
        </Slider>
      </div>
    </CarouselProvider>
  );
};

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [visibleSlides, setVisibleSlides] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleSlides(4);
      else if (width >= 768) setVisibleSlides(3);
      else setVisibleSlides(2);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-gray-200 w-screen">
      <div className="bg-black">
        <p className="text-xs text-center text-white lg:text-lg">
          Envios gratis a partir de los 80.000$
        </p>
      </div>
      <Header />

      <div className=" min-h-screen">
        <Banner src={banner1} alt="Banner Hombres" />
        <ProductCarousel visibleSlides={visibleSlides} />
        <Banner src={banner1} alt="Banner Hombres" />
        <ProductCarousel visibleSlides={visibleSlides} />
      </div>

      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />
      <Footer />
    </main>
  );
};

export default Home;
