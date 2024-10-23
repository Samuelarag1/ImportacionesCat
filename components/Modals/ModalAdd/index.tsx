"use client";
import Header from "@/components/Header";
import IProduct from "@/Models/Products"; // Adaptado para productos
import ISizeStock from "@/Models/SizeStock";
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
import React, { ChangeEvent, FormEvent, useState } from "react";

function ProductsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
  const handleShowConfirm = () => {
    setShowConfirmModal(true);
  };

  const handleHideConfirm = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleOnSubmit}>
              <div className="grid grid-cols-2 gap-4 m-2">
                <div>
                  <p className="text-start text-sm ml-2 text-black">
                    Nombre <span className="text-red-500">*</span>
                  </p>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Ingrese nombre del producto"
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div>
                  <p className="text-start text-sm ml-2 text-black">Marca</p>
                  <input
                    name="brand"
                    id="brand"
                    type="text"
                    placeholder="Ingrese marca del producto"
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                    onChange={handleOnChange}
                  />
                </div>
                <div>
                  <p className="text-start text-sm ml-2 text-black">
                    Precio <span className="text-red-500">*</span>
                  </p>
                  <input
                    name="price"
                    id="price"
                    type="number"
                    placeholder="Ingrese precio"
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div>
                  <p className="text-start text-sm ml-2 text-black">
                    Descuento
                  </p>
                  <input
                    name="discount"
                    id="discount"
                    type="number"
                    placeholder="Ingrese descuento"
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                    onChange={handleOnChange}
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
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
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
                <div>
                  <p className="text-start text-sm ml-2 text-black">
                    SubCategoria
                  </p>
                  <select
                    name="subcategorie"
                    id="subcategorie"
                    onChange={handleOnChange}
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                    required
                  >
                    <option disabled value="">
                      Seleccione subcategoria
                    </option>
                    <option value="Calzados">Calzados</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Accesorios">Accesorios</option>
                  </select>
                </div>
                <div>
                  <p className="text-start text-sm ml-2 text-black">Tamaño</p>
                  <select
                    onChange={handleOnChange}
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                  >
                    <option value="" disabled>
                      Seleccione tamaño
                    </option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                  </select>
                </div>
                <div>
                  <p className="text-start text-sm ml-2 text-black">Stock</p>
                  <input
                    type="number"
                    placeholder="Ingrese stock"
                    className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-black text-start ml-2">
                    Imagen del Producto
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="p-2 w-full bg-white text-black rounded-sm"
                  />
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
  );
}

export default ProductsPage;
