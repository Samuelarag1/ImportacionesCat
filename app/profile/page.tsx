"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useUserStore from "@/store/userStore";
import IUser from "@/Models/User";

function Profile() {
  const { user } = useUserStore();

  console.log(user);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUser>();

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${user?.email}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.statusText);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="bg-primary min-h-screen w-full">
        <Header onToggle={() => setToggle(!toggle)} />
        <div className="flex flex-col justify-center align-top items-center mt-5">
          <div className="h-20 w-20 rounded-full border-black border-[2px]"></div>
          <h4 className="text-center">Bienvenido a tu perfil</h4>
        </div>

        <div className="absolute w-full bottom-0">
          <Footer />
          <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
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

export default Profile;
