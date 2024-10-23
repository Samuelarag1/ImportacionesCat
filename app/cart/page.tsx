"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import React from "react";
import { GoTrash } from "react-icons/go";

const Cart: React.FC = () => {
  const { items, removeItem, increaseQuantity, decreaseQuantity } =
    useCartStore();
  console.log(items);

  const handleOnRemove = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este item?")) {
      removeItem(id);
    }
  };

  const formatPrice = (price: string) => {
    const numberPrice = parseFloat(price);
    if (isNaN(numberPrice)) return "$0.00";
    return `$${numberPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;
  };

  const calculateTotalBuy = () => {
    let value = 0;
    items.forEach((product) => {
      value += parseFloat(product.price) * product.quantity;
    });
    return formatPrice(value.toString());
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow overflow-auto text-center">
        {items.length === 0 ? (
          <strong>El carrito está vacío.</strong>
        ) : (
          <>
            <ul className="overflow-auto">
              {items.map((item) => (
                <li key={item.id} className="flex h-28 mt-2 mb-2">
                  <Image
                    src={item.picture}
                    width={40}
                    height={40}
                    alt={item.name}
                    className="object-cover w-20 m-2 rounded-sm"
                  />
                  <div className="flex justify-between w-full m-2">
                    <div className="w-full">
                      <div className="flex w-full justify-between ">
                        <div className="text-start">
                          <p>{item.name}</p>
                          <p>Talle: </p>
                        </div>
                        <button onClick={() => handleOnRemove(item.id)}>
                          <GoTrash size={25} color="black" />
                        </button>
                      </div>
                      <div className="flex align-middle items-center justify-between w-full mt-4">
                        <div className="flex border border-black rounded-full items-center w-20 align-middle justify-around p-1">
                          <button onClick={() => decreaseQuantity(item.id)}>
                            <p className="text-xl"> - </p>
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => increaseQuantity(item.id)}>
                            <p className="text-xl"> + </p>
                          </button>
                        </div>
                        <p className="text-xs">${item.price}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <hr />
            </ul>
            <div className="flex flex-col m-2">
              <div className="flex justify-between">
                <strong>Total:</strong>
                <strong>{calculateTotalBuy()} </strong>
              </div>
              <button className="bg-black rounded-full text-white w-full p-2 font-body">
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
