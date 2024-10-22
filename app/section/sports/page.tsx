"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

const News: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-primary">
      <div className="bg-black ">
        <p className="text-xs text-center">
          Envios gratis a partir de los 80.000$
        </p>
      </div>
      <Header />

      <Sidebar isOpenSideBar={toggle} onClose={() => setToggle(false)} />
    </main>
  );
};

export default News;
