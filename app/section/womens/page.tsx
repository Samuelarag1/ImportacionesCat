"use client";

import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";
import ProductCard from "../../../components/ProductCard";
import Sidebar from "../../../components/Sidebar";

//! Banners
import girls from "/public/girls.png";
import girls2 from "/public/girls2.webp";

//? ImagesCard

import women1 from "/public/womens/women1.webp";
import women2 from "/public/womens/women2.webp";
import women3 from "/public/womens/women3.webp";
import women4 from "/public/womens/women4.webp";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [visibleSlides, setVisibleSlides] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(4);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className="min-h-screen bg-third w-screen">
      <div className="bg-black">
        <p className="text-xs text-center text-white lg:text-lg">
          Envios gratis a partir de los 80.000$
        </p>
      </div>
      <Header />
      {/* Mobile Version */}
      <div className=" min-h-screen">
        <Banner src={girls} alt="Banner Hombres" />
        <Breadcrumb
          className="m-4 h-10 align-middle flex text-black border-s-gray-200 border-[1px] rounded-lg"
          spacing="6px"
          separator={<MdChevronRight color="gray" size={25} />}
        >
          <BreadcrumbItem className="ml-2">
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink className="text-white">Mujeres</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="flex justify-end mr-4 font-body">
          <select className="border-[1px] border-black p-1 rounded-lg">
            <option disabled defaultChecked>
              Filtrar
            </option>
            <option value="">Nombre A-Z</option>
            <option value="">Ultimo Agregado</option>
            <option value="">Mas barato</option>
            <option value="">Mas caro</option>
          </select>
        </div>
        <div className="grid grid-cols-2 m-4 gap-2 lg:grid-cols-5">
          <ProductCard
            imageSrc={women1}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women2}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women4}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women3}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women1}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women2}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women4}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women3}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women1}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women2}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women4}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
          <ProductCard
            imageSrc={women3}
            title="Remera"
            price={"1500"}
            brand="brand"
          />
        </div>
      </div>

      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />

      <Footer />
    </main>
  );
};

export default Home;
