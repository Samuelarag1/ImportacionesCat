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
import { GoEye } from "react-icons/go";

const BannersPage = () => {
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
    imageUrl: "",
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

    formData.append("name", product.name);
    formData.append("brand", product.brand);
    formData.append("categorie", product.categorie);
    formData.append("price", product.price);
    formData.append("discount", product.discount.toString());
    formData.append("subCategorie", product.subCategorie);

    // Añadiendo tamaños y stock al formulario
    selectedSizes.forEach((size) => {
      formData.append("sizes[]", JSON.stringify({ size, stock }));
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
          <Button onClick={onOpen}>Agregar Banner</Button>
        </div>
        <table className="w-full text-left text-white bg-[#15438c] bg-opacity-80 mt-2 text-xs">
          <thead>
            <tr>
              <th className="p-2 border-b">Titulo</th>
              <th className="p-2 border-b">Categoria</th>
              <th className="p-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">Hombres</td>
              <td className="p-2 border-b">Hombres</td>
              <td className="p-2 border-b">
                <div className="flex justify-center">
                  <button
                    className="mr-2"
                    onClick={() => {
                      console.log("edit");
                    }}
                  >
                    <GoEye size={20} color="white" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b">Mujeres</td>
              <td className="p-2 border-b">Mujeres</td>

              <td className="p-2 border-b">
                <div className="flex justify-center">
                  <button
                    className="mr-2"
                    onClick={() => {
                      console.log("edit");
                    }}
                  >
                    <GoEye size={20} color="white" />
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
            <ModalHeader>Agregar Banner</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleOnSubmit}>
                <div className="grid grid-cols-2 gap-4 m-2">
                  <div>
                    <p className="text-start text-sm ml-2 text-black">
                      Titulo<span className="text-red-500">*</span>
                    </p>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Ingrese nombre del producto"
                      className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-white  placeholder-gray-400 text-gray-500 focus:outline-none"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div>
                    <p className="text-start text-sm ml-2 text-black">
                      Categoria <span className="text-red-500">*</span>
                    </p>
                    <select
                      name="categorie"
                      id="categorie"
                      onChange={handleOnChange}
                      className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-white  placeholder-gray-400 text-gray-500 focus:outline-none"
                      required
                    >
                      <option disabled value="">
                        Seleccione categoria
                      </option>
                      <option value="Hombres">Hombres</option>
                      <option value="Mujeres">Mujeres</option>
                      <option value="Deportes">Deportes</option>
                      <option value="Accesorios">Accesorios</option>
                      <option value="Niños">Niños</option>
                    </select>
                  </div>
                  <div className="w-full justify-center items-center flex flex-col col-span-2">
                    <p className="text-black text-start ml-2">
                      Imagen del Banner <span className="text-red-500">*</span>
                    </p>
                    <div className="grid w-full max-w-xs items-center gap-1.5">
                      <input
                        id="file"
                        type="file"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                      />
                    </div>
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

export default BannersPage;
