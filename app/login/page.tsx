"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Center, Divider, Spinner, useToast } from "@chakra-ui/react";
import useUserStore from "@/store/userStore";
import Cookies from "js-cookie";

const LoginPage = () => {
  const { setUser } = useUserStore();
  const [toggle, setToggle] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [Users, setUsers] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers({
      ...Users,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Users.email,
          password: Users.password,
        }),
      });
      if (response.ok) {
        const data = await response.json();

        setUser(data.user);

        if (data.access_token) {
          Cookies.set("token", data.access_token, {
            expires: 1,
            sameSite: "strict",
          });
        }

        if (data.user.role === "admin") {
          setLoading(true);
          setTimeout(() => {
            toast({
              title: "Inicia de sesion",
              description: "Serás redirigido al panel de administracion.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            setTimeout(() => {
              setLoading(false);
              window.location.href = "/admin/administration";
            }, 1000);
          }, 1500);
        } else if (data.user.role === "customer") {
          setLoading(true);
          setTimeout(() => {
            toast({
              title: "Inicio de sesion",
              description:
                "Serás redirigido a tu perfil, podes completar los datos de facturacion y mas..",
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            setTimeout(() => {
              setLoading(false);
              window.location.href = "/";
            }, 1000);
          }, 1500);
        }
      } else {
        setLoading(true);
        setTimeout(() => {
          toast({
            title: "Inicio de sesion",
            description: "Error al iniciar sesion, verifique sus datos",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }, 1500);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    } catch (error: any) {
      setLoading(true);
      setTimeout(() => {
        toast({
          title: "Inicio de  sesion",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }, 1500);
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
          <div className="m-4 w-[95%] max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={login}>
              <h5 className="text-xl font-medium text-black text-center md:text-left">
                Iniciar sesión
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={Users.email}
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
              >
                Ingresa a tu cuenta
              </button>
              <div className="text-sm font-medium text-gray-800 text-center">
                No tienes cuenta?{" "}
                <Link href="/register">
                  <p className="hover:underline text-blue-600">Crear cuenta</p>
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
};

export default LoginPage;
