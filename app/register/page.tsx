"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Link, Spinner, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { valideRegister } from "./validate";

function Register() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const toast = useToast();

  const [Users, setUsers] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedUsers = { ...Users, [name]: value };

    setUsers(updatedUsers);

    const message = valideRegister(updatedUsers);
    setErrorMessage(message);
  };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const message = valideRegister(Users);
    if (!message) {
      const user = {
        email: Users.email,
        password: Users.password,
      };

      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          setTimeout(() => {
            setLoading(false);
            toast({
              title: "Cuenta creada",
              description:
                "Seras redirigido al login. Puedes editar tus datos desde tu perfil.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }, 1500);
          window.location.href = "/login";
        } else {
          const data = await response.json();
          throw new Error(data.message || "Error al registrar el usuario");
        }
      } catch (error: any) {
        setTimeout(() => {
          setLoading(false);
          toast({
            title: "Error al crear cuenta",
            description: error.message || "Ocurrió un error inesperado.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }, 2000);
      }
    } else {
      setErrorMessage(message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-primary overflow-hidden">
        <Header onToggle={() => setToggle(!toggle)} />
        <div className="flex-grow flex flex-col justify-center items-center bg-primary align-middle">
          <div className="m-5 w-[95%] max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <form className="space-y-6" onSubmit={register}>
              <h5 className="text-xl font-medium text-white text-center md:text-left">
                Registrarse
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={Users.email}
                  autoComplete="email"
                  onChange={handleOnChange}
                  className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="email@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={Users.password}
                  autoComplete="password"
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={Users.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  required
                />
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              <button
                type="submit"
                className="w-full text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600"
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Crear cuenta"}
              </button>

              <div className="text-sm font-medium text-gray-300 text-center">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login">
                  <p className="hover:underline text-blue-500">
                    Iniciar sesión
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer />

          <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />
        </div>
        {loading && (
          <div className="top-0 left-0 fixed z-50 h-screen w-screen flex items-center align-middle bg-black bg-opacity-80 justify-center">
            <Spinner color="white" size={"xl"} />
          </div>
        )}
      </div>
    </>
  );
}

export default Register;
