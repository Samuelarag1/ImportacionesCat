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

      <h1>title</h1>
      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />

      <Footer />
    </main>
  );
};

export default Home;
