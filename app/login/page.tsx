"use client";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-primary text-textGray shadow-2xl shadow-black">
      <div className="absolute h-20 top-0 bg-secondary w-full text-center">
        <h1 className="text-2xl mt-5">Brand Name</h1>
      </div>
      <div className="text-center text-2xl mb-2 font-bold text-white">
        <p>Inicio de Sesion para usuarios</p>
      </div>
      <div className="m-4 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center md:text-left">
            Iniciar sesión
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="email@email.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Recuérdame
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Olvidaste tu contraseña
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ingresa a tu cuenta
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
            No tienes cuenta?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Crear cuenta
            </a>
          </div>
        </form>
      </div>

      <footer className="bg-secondary w-full p-2 text-center absolute bottom-0">
        All rights reserved
      </footer>
    </div>
  );
};

export default LoginPage;