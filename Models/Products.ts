import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ISizeStock from "./SizeStock";

export default interface IProduct {
  id?: string;
  name: string;
  price: string;
  sizes?: ISizeStock[];
  brand?: string;
  discount?: number;
  categorie?: "Deportivo" | "Hombre" | "Mujer" | "Nino" | "";
  subCategorie?: "Nuevos Ingresos" | "Calzados" | "Ropa" | "Accesorios" | "";
  picture: string | StaticImport;
  quantity?: number;
}
