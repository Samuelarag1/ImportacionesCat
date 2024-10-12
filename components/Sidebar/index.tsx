"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import Accordion from "../Accordion";
import { MdAdminPanelSettings } from "react-icons/md";
import { Spinner } from "@chakra-ui/react";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleAdminClick = () => {
    setLoading(true);

    setTimeout(() => {
      window.location.href = "/admin/administration";
    }, 500);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-primary transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-secondary h-40 text-center flex flex-col justify-center items-center align-middle border-b-black border-b-4">
          <h1 className="text-3xl text-white font-title">
            Importaciones Catamarca
          </h1>
          <div className="flex justify-center gap-4 mt-5 font-body text-xs text-white">
            <Image width={30} height={30} src={"/cart.png"} alt="icon" />
          </div>
        </div>
        <div className="text-center ">
          <div className="flex flex-col mt-4">
            <div className="flex flex-col gap-2 justify-between text-start">
              <Accordion label="Hombres" link="/section/mens">
                <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                  <li>
                    <Link
                      href="/section/mens/new"
                      className="flex gap-2 items-center"
                    >
                      <p className="hover:underline text-white ml-2">
                        Nuevos ingresos
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/section/mens/shoes"
                      className="flex items-center gap-2"
                    >
                      <p className="hover:underline text-white ml-2">Calzado</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/mens/clothes">
                      <p className="hover:underline text-white ml-2">Ropa</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/mens/accesories">
                      <p className="hover:underline text-white ml-2">
                        Accesorios
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/mens">
                      <p className="hover:underline text-white">
                        Ver todo Hombre
                      </p>
                    </Link>
                  </li>
                </ul>
              </Accordion>

              {/* <hr /> */}
              <Accordion label="Mujeres" link="/section/womens">
                <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                  <li>
                    <Link href="/section/womens/new">
                      <p className="hover:underline text-white ml-2">
                        Nuevos ingresos
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/womens/shoes">
                      <p className="hover:underline text-white ml-2">Calzado</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/womens/clothes">
                      <p className="hover:underline text-white ml-2">Ropa</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/womens/accesories">
                      <p className="hover:underline text-white ml-2">
                        Accesorios
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/womens">
                      <p className="hover:underline text-white">
                        Ver todo Mujeres
                      </p>
                    </Link>
                  </li>
                  <hr />
                </ul>
              </Accordion>
              {/* <hr /> */}
              <Accordion label="Niños" link="/section/kids">
                <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                  <li>
                    <Link href="/section/kids/new">
                      <p className="hover:underline text-white ml-2">
                        Nuevos ingresos
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/kids/shoes">
                      <p className="hover:underline text-white ml-2">Calzado</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/kids/clothes">
                      <p className="hover:underline text-white ml-2">Ropa</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/kids/accesories">
                      <p className="hover:underline text-white ml-2">
                        Accesorios
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/kids">
                      <p className="hover:underline text-white">
                        Ver todo Niños
                      </p>
                    </Link>
                  </li>
                  <hr />
                </ul>
              </Accordion>
              {/* <hr /> */}
              <Accordion label="Deportes" link="/section/sports">
                <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                  <li>
                    <Link href="/section/sports/new">
                      <p className="hover:underline text-white ml-2">
                        Nuevos ingresos
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/sports/shoes">
                      <p className="hover:underline text-white ml-2">Futbol</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/sports/clothes">
                      <p className="hover:underline text-white ml-2">Basquet</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/sports/accesories">
                      <p className="hover:underline text-white ml-2">Tenis</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/section/sports">
                      <p className="hover:underline text-white">
                        Ver todo en Deportes
                      </p>
                    </Link>
                  </li>
                  <hr />
                </ul>
              </Accordion>
              <Accordion label="Accesorios" link="/section/accesories">
                <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                  <li>
                    <Link href="/section/accesories">
                      <p className="hover:underline text-white ml-2">
                        Ver todo enAccesorios
                      </p>
                    </Link>
                  </li>
                  <hr />
                </ul>
              </Accordion>
            </div>
          </div>

          <div className=" absolute bottom-0 w-full text-center text-sm">
            {" "}
            <div className="text-start mt-10">
              <div className="w-full bg-black rounded-lg">
                <Link
                  onClick={handleAdminClick}
                  // href={"/admin/administration"}
                  href={"#"}
                  className="flex align-middle items-center bg-black p-2 gap-2 justify-center rounded-md "
                >
                  <MdAdminPanelSettings size={40} color="white" />
                  <p className="text-white">Panel de administrador</p>
                </Link>
              </div>
              <div className="w-full h-10 flex justify-around mt-5 mb-2">
                <Link
                  href={"/login"}
                  className="flex align-middle items-center bg-black p-2 gap-2 justify-center rounded-md "
                >
                  <FaUserAlt size={20} color="white" />
                  <p className="text-white">Mi cuenta</p>
                </Link>
                <Link
                  href={"/cart"}
                  className="flex align-middle items-center bg-black p-2 gap-2 justify-center rounded-md"
                >
                  <FaShoppingCart size={20} color="white" />
                  <p className="text-white">Mi carrito</p>
                </Link>
              </div>
            </div>
            <div className="bg-secondary h-14 ">
              <p className="text-white">
                Todos los derechos reservados
                <br />
                Importaciones Catamarca
              </p>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="top-0 left-0 fixed z-50 h-screen w-screen flex items-center align-middle bg-black bg-opacity-80 justify-center">
          <Spinner color="white" size={"xl"} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
