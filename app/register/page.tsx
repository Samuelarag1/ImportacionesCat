"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Center, Divider, Link, Spinner, useToast } from "@chakra-ui/react";
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
        const response = await fetch(
          "https://ecommerce-back-g7pr72bsl-samuels-projects-c50ca478.vercel.app/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

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
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex justify-around items-center bg-primary ">
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <h1 className="text-4xl font-title text-center">
              Importaciones <br /> Catamarca
            </h1>
          </div>
          <div className="hidden lg:flex">
            <Center height="500px">
              <Divider orientation="vertical" />
            </Center>
          </div>
          <div className="m-4 w-[95%] max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8 ">
            <form className="space-y-6" onSubmit={register}>
              <h5 className="text-xl font-medium text-black text-center md:text-left">
                Registrarse
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={Users.email}
                  autoComplete="email"
                  onChange={handleOnChange}
                  className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-gray-300  placeholder-gray-400 text-black focus:outline-none"
                  placeholder="email@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={Users.password}
                  autoComplete="password"
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-gray-300  placeholder-gray-400 text-black focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={Users.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  className="border text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-gray-300  placeholder-gray-400 text-black focus:outline-none"
                  required
                />
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              <button
                type="submit"
                className="w-full text-white hover:bg-black hover:transition hover:ease-in-out hover:duration-500 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-900"
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Crear cuenta"}
              </button>

              <div className="text-sm font-medium text-gray-800 text-center">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login">
                  <p className="hover:underline text-blue-600">
                    Iniciar sesión
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
        <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />
      </div>
      {loading && (
        <div className="top-0 left-0 fixed z-50 h-screen w-screen flex items-center align-middle bg-black bg-opacity-80 justify-center">
          <Spinner color="white" size={"xl"} />
        </div>
      )}
    </>
  );
}

export default Register;
