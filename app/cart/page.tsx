"use client";
import dynamic from "next/dynamic"; // Para lazy loading
import React, { useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";

// Lazy load de componentes pesados
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Cargando encabezado...</p>, // Componente de fallback
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Cargando pie de página...</p>,
});
const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  loading: () => <p>Cargando menú lateral...</p>,
});

//! Images
import campera from "/public/camperas.png";
import lompa from "/public/mens/lompa.png";
import camisaco from "/public/womens/women2.webp";

interface IProduct {
  id?: number;
  name: string;
  price: string;
  discount: string;
  brand: string;
  categorie: string;
  imageUrl: string | StaticImageData;
}

const ShoppingCart: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [items, setItems] = useState<IProduct[]>([
    {
      id: 1,
      name: "Campera de cuero",
      price: "15000",
      discount: "5%",
      brand: "Marca A",
      categorie: "Ropa",
      imageUrl: campera,
    },
    {
      id: 2,
      name: "Pantalones de Mezclilla",
      price: "20000",
      discount: "10%",
      brand: "Marca B",
      categorie: "Ropa",
      imageUrl: lompa,
    },
    {
      id: 3,
      name: "Camisaco",
      price: "18500",
      discount: "15%",
      brand: "Marca C",
      categorie: "Ropa",
      imageUrl: camisaco,
    },
  ]);

  // Memoriza el cálculo total para evitar recálculos en cada render
  const totalAmount = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + parseFloat(item.price) * (1 - parseFloat(item.discount) / 100),
        0
      ),
    [items]
  );

  const handleCheckout = () => {
    alert("Procediendo al pago...");
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-primary h-screen">
      <Header />
      <div className="bg-secondary p-4 rounded-lg shadow-lg w-full max-w-md mx-auto m-2">
        <h2 className="text-xl text-white font-bold mb-4 text-center">
          Carrito de Compras
        </h2>
        {items.length === 0 ? (
          <div className="text-center text-gray-400 text-md">
            Tu carrito está vacío.
          </div>
        ) : (
          <>
            <ul className="space-y-2 mb-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center p-2 bg-third rounded-lg shadow-md"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover mr-2"
                    placeholder="blur"
                  />
                  <div className="flex-grow">
                    <div className="font-semibold text-white text-sm">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      Marca: <span className="text-white">{item.brand}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Categoría:{" "}
                      <span className="text-white">{item.categorie}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Descuento:{" "}
                      <span className="text-white">{item.discount}</span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-white">
                    ${item.price}
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id!)}
                    className="ml-2 text-red-500 hover:text-red-700 text-xs"
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-gray-300 font-semibold text-sm">
              <span className="text-white">Total:</span>
              <span className="text-white">${totalAmount.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm"
            >
              Proceder al Pago
            </button>
          </>
        )}
      </div>

      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
