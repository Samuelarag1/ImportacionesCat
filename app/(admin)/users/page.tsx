// pages/usuarios.tsx
"use client";
import React, { useState } from "react";
import ModalAdd from "@/components/Modals/ModalAdd/index";
import ModalConfirmDialog from "@/components/Modals/Modal";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs";

const UsersPage = () => {
  const [header, setHeader] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalDialog, setShowModalDialog] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div className="h-screen bg-primary text-slate-300">
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
              <th className="p-2 border-b">Nombre</th>
              <th className="p-2 border-b">Permisos</th>
              <th className="p-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">Admin</td>
              <td className="p-2 border-b">administrador</td>
              <td className="p-2 border-b"></td>
            </tr>
            <tr>
              <td className="p-2 border-b">Usuario 1</td>
              <td className="p-2 border-b">vendedor</td>
              <td className="p-2 border-b">
                <div className="flex">
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed z-10 top-52 ml-auto w-full flex flex-col items-center">
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

      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
    </>
  );
};

export default UsersPage;
