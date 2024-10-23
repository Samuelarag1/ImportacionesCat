// pages/usuarios.tsx
"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ModalAdd from "@/components/Modals/ModalAdd/index";
import ModalConfirmDialog from "@/components/Modals/Modal";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import IProduct from "@/Models/Products";

const UsersPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //!Manejo del FORMULARIO

  const [product, setProduct] = useState<IProduct>({
    name: "",
    price: "",
    sizes: [],
    brand: "",
    discount: 0,
    picture: "",
    subCategorie: "",
    categorie: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Estado para tamaño y stock
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [stock, setStock] = useState<number | undefined>(undefined);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(value)
        ? prevSizes.filter((size) => size !== value)
        : [...prevSizes, value]
    );
  };

  const handleStockChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStock(Number(e.target.value));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    // Asegurarte de que los campos no son vacíos antes de añadirlos a formData
    if (product.name) {
      formData.append("name", product.name);
    }
    if (product.brand) {
      formData.append("brand", product.brand);
    }
    if (product.categorie) {
      formData.append("categorie", product.categorie);
    }
    if (product.price) {
      formData.append("price", product.price);
    }
    if (typeof product.discount === "number") {
      formData.append("discount", product.discount.toString());
    }
    if (product.subCategorie) {
      formData.append("subCategorie", product.subCategorie);
    }

    // Añadiendo tamaños y stock al formulario
    selectedSizes.forEach((size) => {
      if (stock !== undefined) {
        formData.append("sizes[]", JSON.stringify({ size, stock }));
      }
    });

    if (image) {
      formData.append("image", image);
    }

    console.log("Datos de producto enviados: ", formData);
    // Ejemplo de envío:
    // fetch("/api/products", {
    //   method: "POST",
    //   body: formData,
    // });
  };

  return (
    <>
      <div className="h-screen bg-primary text-black">
        <div className="w-full flex justify-center">
          <Button onClick={onOpen}>Agregar Usuario</Button>
        </div>
        <table className="w-full text-left text-white bg-[#15438c] bg-opacity-80 mt-2 text-xs">
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
                      console.log("edit");
                    }}
                  >
                    <BsPencilFill size={25} color="white" />
                  </button>
                  <button
                    onClick={() => {
                      console.log("delete");
                    }}
                  >
                    <BsTrash3Fill size={25} color="white" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent className="m-2">
            <ModalHeader>Crear Usuario</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleOnSubmit}>
                <div className="grid grid-cols-2 gap-4 m-2">
                  <div>
                    <p className="text-start text-sm  text-black">
                      Nombre <span className="text-red-500">*</span>
                    </p>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Ingrese nombre"
                      className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-white  placeholder-gray-400 text-gray-500 focus:outline-none"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div>
                    <p className="text-start text-sm  text-black">Email</p>
                    <input
                      name="brand"
                      id="brand"
                      type="text"
                      placeholder="email@email.com"
                      className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-white  placeholder-gray-400 text-gray-500 focus:outline-none"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div>
                    <p className="text-start text-sm  text-black">
                      Contraseña <span className="text-red-500">*</span>
                    </p>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-white  placeholder-gray-400 text-gray-500 focus:outline-none"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div>
                    <p className="text-start text-sm  text-black w-full text-wrap">
                      Confirmar contraseña
                    </p>
                    <input
                      name="confirmPassword"
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-white  placeholder-gray-400 text-gray-500 focus:outline-none"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-start text-sm  text-black">Rol</p>
                    <select
                      name="role"
                      id="role_id"
                      className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-white  placeholder-gray-400 text-gray-500 focus:outline-none"
                    >
                      <option value="default" defaultChecked disabled>
                        Seleccione un rol
                      </option>
                      <option value="admin">Administrador</option>
                      <option value="employee">Empleado</option>
                      <option value="customer">Consumidor</option>
                    </select>
                  </div>
                </div>
                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Enviar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>

      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />
    </>
  );
};

export default UsersPage;
