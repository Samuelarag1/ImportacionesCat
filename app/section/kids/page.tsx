"use client";

import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";
import ProductCard from "../../../components/ProductCard";
import Sidebar from "../../../components/Sidebar";

//! Banners
import kids_banner_1 from "/public/kids_banner_1.webp";
import kids_banner_2 from "/public/kids_banner_2.jpg";

//? ImagesCard

import kids1 from "/public/kid1.webp";
import kids2 from "/public/kid2.webp";
import kids3 from "/public/kid3.webp";
import kids4 from "/public/kid4.webp";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
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
      <Header onToggle={() => setToggle(!toggle)} />
      {/* Mobile Version */}
      <div className="lg:hidden min-h-screen">
        <Banner src={kids_banner_1} alt="Banner Hombres" />
        <Breadcrumb
          className="m-4 h-10 align-middle flex text-white border-s-gray-200 border-[1px] rounded-lg"
          spacing="6px"
          separator={<MdChevronRight color="gray" size={25} />}
        >
          <BreadcrumbItem className="ml-2">
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink className="text-white">Niños</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={25}
          totalSlides={4}
          visibleSlides={visibleSlides}
          infinite={true}
          className="relative mt-10 max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <ButtonBack className="p-2 rounded-full shadow-lg">
                <IoChevronBackCircleSharp size={32} color="white" />
              </ButtonBack>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <ButtonNext className="p-2 rounded-full shadow-lg">
                <IoChevronForwardCircleSharp size={32} color="white" />
              </ButtonNext>
            </div>

            <Slider className="overflow-hidden m-8">
              <Slide index={0}>
                <ProductCard
                  imageSrc={kids1}
                  title="Remera"
                  price={"1500"}
                  brand="brand"
                />
              </Slide>
              <Slide index={1}>
                <ProductCard
                  imageSrc={kids2}
                  title="Remera"
                  price={"5200"}
                  brand="brand"
                />
              </Slide>
              <Slide index={2}>
                <ProductCard
                  imageSrc={kids3}
                  title="Remera"
                  price={"3500"}
                  brand="brand"
                />
              </Slide>
              <Slide index={3}>
                <ProductCard
                  imageSrc={kids4}
                  title="Remera"
                  price={"500"}
                  brand="brand"
                />
              </Slide>
            </Slider>
          </div>
        </CarouselProvider>

        <Banner src={kids_banner_2} alt="Banner Hombres" />

        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={25}
          totalSlides={4}
          visibleSlides={visibleSlides}
          infinite={true}
          className="relative mt-10 max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <ButtonBack className="p-2 rounded-full shadow-lg">
                <IoChevronBackCircleSharp size={32} color="white" />
              </ButtonBack>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <ButtonNext className="p-2 rounded-full shadow-lg ">
                <IoChevronForwardCircleSharp size={32} color="white" />
              </ButtonNext>
            </div>

            <Slider className="overflow-hidden m-8">
              <Slide index={0}>
                <ProductCard
                  imageSrc={kids3}
                  title="Remera"
                  price={"3500"}
                  brand="brand"
                />
              </Slide>
              <Slide index={1}>
                <ProductCard
                  imageSrc={kids4}
                  title="Remera"
                  price={"500"}
                  brand="brand"
                />
              </Slide>
              <Slide index={2}>
                <ProductCard
                  imageSrc={kids1}
                  title="Remera"
                  price={"1500"}
                  brand="brand"
                />
              </Slide>
              <Slide index={3}>
                <ProductCard
                  imageSrc={kids2}
                  title="Remera"
                  price={"5200"}
                  brand="brand"
                />
              </Slide>
            </Slider>
          </div>
        </CarouselProvider>
      </div>
      {/* Desktop Version */}
      <div className="lg:w-screen lg:min-h-screen lg:bg-secondary lg:flex lg:justify-center hidden">
        <div className="lg:w-[70%] lg:bg-third lg:min-h-screen ">
          <Banner src={kids_banner_2} alt="Banner Hombres" />
          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={25}
            totalSlides={4}
            visibleSlides={visibleSlides}
            infinite={true}
            className="relative mt-10 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <ButtonBack className="p-2 rounded-full shadow-lg">
                  <IoChevronBackCircleSharp size={32} />
                </ButtonBack>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <ButtonNext className="p-2 rounded-full shadow-lg">
                  <IoChevronForwardCircleSharp size={32} />
                </ButtonNext>
              </div>

              <Slider className="overflow-hidden m-8">
                <Slide index={0}>
                  <ProductCard
                    imageSrc={kids1}
                    title="Remera"
                    price={"1500"}
                    brand="brand"
                  />
                </Slide>
                <Slide index={1}>
                  <ProductCard
                    imageSrc={kids2}
                    title="Remera"
                    price={"5200"}
                    brand="brand"
                  />
                </Slide>
                <Slide index={2}>
                  <ProductCard
                    imageSrc={kids3}
                    title="Remera"
                    price={"3500"}
                    brand="brand"
                  />
                </Slide>
                <Slide index={3}>
                  <ProductCard
                    imageSrc={kids4}
                    title="Remera"
                    price={"500"}
                    brand="brand"
                  />
                </Slide>
              </Slider>
            </div>
          </CarouselProvider>

          <Banner src={kids_banner_1} alt="Banner Hombres" />
          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={25}
            totalSlides={4}
            visibleSlides={visibleSlides}
            infinite={true}
            className="relative mt-10 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <ButtonBack className="p-2 rounded-full shadow-lg">
                  <IoChevronBackCircleSharp size={32} />
                </ButtonBack>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <ButtonNext className="p-2 rounded-full shadow-lg">
                  <IoChevronForwardCircleSharp size={32} />
                </ButtonNext>
              </div>

              <Slider className="overflow-hidden m-8">
                <Slide index={0}>
                  <ProductCard
                    imageSrc={kids1}
                    title="Remera"
                    price={"1500"}
                    brand="brand"
                  />
                </Slide>
                <Slide index={1}>
                  <ProductCard
                    imageSrc={kids2}
                    title="Remera"
                    price={"5200"}
                    brand="brand"
                  />
                </Slide>
                <Slide index={2}>
                  <ProductCard
                    imageSrc={kids3}
                    title="Remera"
                    price={"3500"}
                    brand="brand"
                  />
                </Slide>
                <Slide index={3}>
                  <ProductCard
                    imageSrc={kids4}
                    title="Remera"
                    price={"500"}
                    brand="brand"
                  />
                </Slide>
              </Slider>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />

      <Footer />
    </main>
  );
};

export default Home;
