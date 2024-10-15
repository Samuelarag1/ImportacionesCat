import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import useUserStore from "@/store/userStore";
import { FiUser } from "react-icons/fi";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useUserStore();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="h-24 bg-gray-200 flex items-center justify-around lg:justify-around lg:h-40 shadow-lg shadow-black border-b-black border-b-4 lg:border-none">
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
                    <BsCart size={30} />{" "}
                    <Avatar
                      bg="blue.500"
                      icon={<FiUser size={20} />}
                      size={"sm"}
                    />
                  </>
                )}
              </WrapItem>
            </Wrap>
          ) : (
            <>
              <BsCart size={30} /> <FiUser size={30} />
            </>
          )}
        </div>
        <div className="lg:flex items-center w-20 gap-2 hidden">
          <BsCart size={50} />
          <FaRegUser size={50} />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-200 z-40 transform  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full "
        } transition-transform duration-300 ease-in-out`}
      >
        <button className="absolute top-10 left-4 z-50" onClick={toggleSidebar}>
          <IoMdClose size={30} color="black" />
        </button>

        <div className="flex flex-col p-8 space-y-6 mt-12">
          {["mens", "womens", "kids", "sports", "accessories"].map(
            (category) => (
              <div key={category}>
                <Link
                  href={`/section/${category.toLowerCase()}`}
                  className="text-xl font-bold"
                >
                  {category}
                </Link>
              </div>
            )
          )}
        </div>
      </div>

      <header className="hidden lg:bg-gray-200 lg:flex lg:items-center lg:justify-around lg:px-8 lg:h-16 lg:border-b-4 lg:border-black">
        <nav className="flex space-x-8 z-50">
          {["Hombres", "Mujeres", "Niños", "Deportes", "Accesorios"].map(
            (category) => (
              <div key={category} className="group relative">
                <Link
                  href={`/section/${category.toLowerCase()}`}
                  className="text-lg text-black hover:underline"
                >
                  {category}
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-secondary text-black text-sm mt-1 p-2 rounded shadow-lg">
                  <Link
                    href={`/section/${category.toLowerCase()}/new`}
                    className="block hover:underline"
                  >
                    Nuevos ingresos
                  </Link>
                  <Link
                    href={`/section/${category.toLowerCase()}/shoes`}
                    className="block hover:underline"
                  >
                    Calzado
                  </Link>
                  <Link
                    href={`/section/${category.toLowerCase()}/clothes`}
                    className="block hover:underline"
                  >
                    Ropa
                  </Link>
                  <Link
                    href={`/section/${category.toLowerCase()}/accesories`}
                    className="block hover:underline"
                  >
                    Accesorios
                  </Link>
                  <Link
                    href={`/section/${category.toLowerCase()}`}
                    className="block hover:underline"
                  >
                    Ver todo {category}
                  </Link>
                </div>
              </div>
            )
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
