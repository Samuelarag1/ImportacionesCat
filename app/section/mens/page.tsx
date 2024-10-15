"use client";

import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";
import ProductCard from "../../../components/ProductCard";
import Sidebar from "../../../components/Sidebar";

import banner1 from "/public/mens/banner1.jpeg";

import Footer from "@/components/Footer";
import IProduct from "@/Models/Products";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>();

  const getAllProducts = async () => {
    const response = await fetch("http://localhost:3001/products/latest");

    const data = await response.json();

    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <main className="min-h-screen bg-third w-screen">
      <div className="bg-black">
        <p className="text-xs text-center text-white lg:text-lg">
          Envios gratis a partir de los 80.000$
        </p>
      </div>
      <Header />
      <div className="min-h-screen">
        <Banner src={banner1} alt="Banner Hombres" />
        <Breadcrumb
          className="m-4 h-10 align-middle flex text-black border-s-gray-200 border-[1px] rounded-lg"
          spacing="6px"
          separator={<MdChevronRight color="gray" size={25} />}
        >
          <BreadcrumbItem className="ml-2">
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Hombres</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {products ? (
          <>
            <div className="w-full flex">
              <div className="hidden">
                <div className="w-1/4 lg:w-1/5 p-4 hidden lg:flex">
                  <h2 className="text-xl font-semibold mb-4">Filtros</h2>

                  <div className="mb-4">
                    <label className="block mb-2">Marca:</label>
                    <select className="w-full p-2 border rounded">
                      <option value="all">Todas</option>
                      <option value="brand1">Brand 1</option>
                      <option value="brand2">Brand 2</option>
                    </select>
                  </div>
                </div>
                <Stack direction="row" h="1000px" p={4}>
                  <Divider orientation="vertical" />
                </Stack>
              </div>

              <div className="w-full lg:w-3/5 p-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {products.map((product, i) => (
                    <ProductCard
                      brand={product.brand}
                      imageSrc={product.imageUrl}
                      price={product.price}
                      title={product.name}
                      id={product.id}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center w-full">
            <p className="font-bold">No hay productos agregados</p>
          </div>
        )}
      </div>

      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />

      <Footer />
    </main>
  );
};

export default Home;
