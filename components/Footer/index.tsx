import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-secondary h-fit w-full">
      <div className="text-white mt-5">
        <p className="text-md text-center text-white">Redes y contacto</p>
        <ul className="list-none text-xs flex justify-around mt-2">
          <li className="text-white flex items-center">
            <TiSocialInstagram color="white" size={20} />
            <a
              target="_blank"
              href="https://www.instagram.com/_importacionescat/"
              className="ml-2"
            >
              Instagram
            </a>
          </li>
          <li className="text-white flex items-center">
            <IoLogoWhatsapp color="white" size={20} />
            <a target="_blank" href="https://wa.me/3834266840" className="ml-2">
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
      <div className="flex text-xs justify-around py-8">
        <div className="flex gap-2 flex-col">
          <a href="/about" className="text-gray-500">
            Sobre nosotros
          </a>
          <a href="/devolution" className="text-gray-500">
            Políticas de devolución
          </a>
        </div>
        <div className="flex gap-2 flex-col">
          <a href="/shipping" className="text-gray-500">
            Envíos
          </a>
          <a href="/cancelOrder" className="text-gray-500">
            Cancelar un pedido
          </a>
        </div>
      </div>
      <div className="bg-secondary p-2 ">
        <p className="font-title text-center text-xs text-white">
          Powered by Samuel Aragon
        </p>
      </div>
    </footer>
  );
}

export default Footer;
