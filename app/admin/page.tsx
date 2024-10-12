"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React, { useState } from "react";

function AdminDashboard() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className="min-h-screen bg-primary text-white">
        <Header onToggle={() => setToggle(!toggle)} />

        <h3 className="text-white text-center mt-5 text-3xl">
          Panel de administracion
        </h3>

        <div className="text-white bg-secondary h-28 flex align-middle items-center justify-center text-center m-2 rounded-lg shadow-md shadow-black mt-16 text-xl">
          <Link href={"/admin/administration"}>Administrar</Link>
        </div>
        <div className="absolute w-full bottom-0">
          <Footer />
        </div>
      </div>
      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
    </>
  );
}

export default AdminDashboard;
