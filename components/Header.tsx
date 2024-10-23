import { FaRegTrashAlt, FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import useUserStore from "@/store/userStore";
import { FiUser } from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";
import useCartStore from "@/store/cartStore";
import IProduct from "@/Models/Products";
import { CartItem } from "@/Models/CartItem";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, clearUser } = useUserStore();
  const { items, removeItem } = useCartStore();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogOut = () => {
    clearUser();
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este artículo?")) {
      removeItem(id);
    }
  };

  const categories = {
    Hombres: "mens",
    Mujeres: "womens",
    Deportivo: "sports",
    Accesorios: "accessories",
    Variedad: "variety",
  };

  return (
    <>
      <div className="h-24 bg-gray-200 flex items-center justify-around lg:justify-around lg:h-40  border-b-black border-b-1">
        {/* Sidebar toggle button */}
        <label className="lg:hidden">
          <div
            className="w-9 h-10 z-50 cursor-pointer flex flex-col items-center justify-center"
            onClick={toggleSidebar}
          >
            <div className="w-[50%] h-[2px] bg-black rounded-sm"></div>
            <div className="w-[50%] h-[2px] bg-black rounded-md my-1"></div>
            <div className="w-[50%] h-[2px] bg-black rounded-md"></div>
          </div>
        </label>

        <Link href={"/"}>
          <header>
            <h1 className="text-xl lg:text-3xl font-title text-center">
              Importaciones
              <br />
              Catamarca
            </h1>
          </header>
        </Link>

        <div className="lg:hidden items-center w-20 flex gap-2 justify-center align-middle ">
          {user ? (
            <Wrap>
              <WrapItem className="flex align-middle items-center justify-center">
                {user?.profilePicture ? (
                  ""
                ) : (
                  <>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        icon={<BsCart size={30} />}
                        aria-label="Options"
                        variant="outline"
                      ></MenuButton>
                      <MenuList>
                        <div className="h-fit w-full flex justify-between items-center p-2 flex-col">
                          {items.length ? (
                            items.map((product) => (
                              <div
                                key={product.id}
                                className="h-fit w-full flex justify-between items-center p-2"
                              >
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={product.picture}
                                    alt="alt"
                                    width={50}
                                    height={50}
                                    className="object-cover w-full h-14 lg:h-80 rounded-md"
                                  />
                                  <div>
                                    <p className="font-bold font-body text-lg">
                                      {product.name}
                                    </p>
                                    <p className="font-body text-gray-600 text-md">
                                      {product.brand}
                                    </p>
                                    <strong className="font-body text-black ">
                                      ${product.price}
                                    </strong>
                                  </div>
                                </div>
                                <div>
                                  <button
                                    className="bg-red-600 rounded-full p-1"
                                    onClick={() => handleDeleteItem(product.id)}
                                  >
                                    <FaRegTrashAlt size={20} color="white" />
                                  </button>
                                </div>
                              </div>
                            ))
                          ) : (
                            <>
                              <strong className="text-xs">
                                Agrega algo al carrito
                              </strong>
                            </>
                          )}
                        </div>
                        <hr />
                        <MenuItem as="a" href="/cart">
                          Ver mi carrito{" "}
                          <MdChevronRight color="gray" size={25} />
                        </MenuItem>
                      </MenuList>
                    </Menu>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        variant="outline"
                      >
                        <Avatar
                          bg="blue.500"
                          icon={<FiUser size={20} />}
                          size={"sm"}
                        />
                      </MenuButton>
                      <MenuList>
                        {user ? (
                          <>
                            <MenuItem as="a" href="/profile">
                              Ir a mi perfil
                            </MenuItem>
                            <MenuItem as="a" href="#">
                              Mis compras
                            </MenuItem>
                            <MenuItem onClick={handleLogOut}>
                              Cerrar sesion
                            </MenuItem>
                          </>
                        ) : (
                          <>
                            <MenuItem as="a" href="/login">
                              Iniciar sesion
                            </MenuItem>
                          </>
                        )}
                        {user.role == "admin" ? (
                          <MenuItem as="a" href="/admin/administration">
                            Panel de administracion
                          </MenuItem>
                        ) : (
                          ""
                        )}
                      </MenuList>
                    </Menu>
                  </>
                )}
              </WrapItem>
            </Wrap>
          ) : (
            <>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<BsCart size={30} />}
                  aria-label="Options"
                  variant="outline"
                ></MenuButton>
                <MenuList>
                  <div className="h-fit w-full flex justify-between items-center p-2 flex-col">
                    {items.length ? (
                      items.map((product) => (
                        <div
                          key={product.id}
                          className="h-fit w-full flex justify-between items-center p-2"
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={product.picture}
                              alt="alt"
                              width={50}
                              height={50}
                              className="object-cover w-full h-14 lg:h-80 rounded-md"
                            />
                            <div>
                              <p className="font-bold font-body text-lg">
                                {product.name}
                              </p>
                              <p className="font-body text-gray-600 text-md">
                                {product.brand}
                              </p>
                              <strong className="font-body text-black ">
                                ${product.price}
                              </strong>
                            </div>
                          </div>
                          <div>
                            <button
                              className="bg-red-600 rounded-full p-1"
                              onClick={() => handleDeleteItem(product.id)}
                            >
                              <FaRegTrashAlt size={20} color="white" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <strong className="text-xs">
                          Agrega algo al carrito
                        </strong>
                      </>
                    )}
                  </div>
                  <hr />
                  <MenuItem
                    as="a"
                    href="/cart"
                    className="flex justify-between"
                  >
                    Ver mi carrito <MdChevronRight color="gray" size={25} />
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  variant="outline"
                >
                  <Avatar
                    bg="blue.500"
                    icon={<FiUser size={20} />}
                    size={"sm"}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem as="a" href="/login">
                    Iniciar sesion
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-50 z-40 transform  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full "
        } transition-transform duration-300 ease-in-out`}
      >
        <button className="absolute top-10 left-4 z-50" onClick={toggleSidebar}>
          <IoMdClose size={30} color="black" />
        </button>

        <div className="flex flex-col p-8 space-y-6 mt-20">
          {Object.entries(categories).map(([category, slug]) => (
            <div key={category}>
              <Link href={`/section/${slug}`} className="text-xl font-bold">
                {category}
              </Link>
            </div>
          ))}
          <Divider orientation="horizontal" />
        </div>
      </div>
    </>
  );
};

export default Header;
