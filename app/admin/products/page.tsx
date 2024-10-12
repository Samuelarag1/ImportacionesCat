// pages/usuarios.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ModalAdd from "@/components/Modals/ModalAdd/index";
import ModalConfirmDialog from "@/components/Modals/Modal";
import { FaRegEye } from "react-icons/fa";
import IProduct from "@/Models/Products";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";

const ProductsPage = () => {
  const [header, setHeader] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalDialog, setShowModalDialog] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    const response = await fetch("http://localhost:3001/products");
    setProducts(await response.json());
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleOnClick = () => {};
  return (
    <>
      <div className="h-screen bg-primary text-slate-300">
        {/* <h1 className="text-2xl mb-8 text-center text-white">Productos</h1> */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              setHeader("Agregar usuario");
              setShowModal(true);
            }}
          >
            <IoMdAddCircleOutline size={50} color="white" />
          </button>
        </div>

        <table className="w-full text-left text-black bg-slate-300 mt-2 text-xs">
          <thead>
            <tr>
              <th className="p-2 border-b">Producto</th>
              <th className="p-2 border-b">Precio</th>
              <th className="p-2 border-b">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((prod) => (
              <>
                <tr key={prod.id}>
                  <td className="p-2 border-b">{prod.name}</td>
                  <td className="p-2 border-b">{prod.price}</td>
                  {/* <td className="p-2 border-b">{prod.stock}</td> */}
                  <td className="p-2 border-b">
                    <button
                      onClick={handleOnClick}
                      className="bg-primary p-1 w-12 h-8 rounded-xl flex items-center justify-center"
                    >
                      <FaRegEye size={20} color="white" />
                    </button>

                    <button
                      className="mr-2"
                      onClick={() => {
                        setHeader("Editar vendedor");
                        setShowModal(true);
                      }}
                    >
                      <BsPencilFill size={25} />
                    </button>
                    <button
                      onClick={() => {
                        setHeader("Borrar vendedor");
                        setShowModalDialog(true);
                      }}
                    >
                      <BsTrash3Fill size={25} />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed z-10 top-16 ml-auto w-full flex flex-col items-center overflow-auto">
            <ModalAdd onHide={() => setShowModal(false)} title={header} />
          </div>
        </>
      )}
      {showModalDialog && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed z-10 top-52 ml-auto w-full flex flex-col items-center">
            <ModalConfirmDialog
              onHide={() => setShowModalDialog(false)}
              title={header}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProductsPage;
