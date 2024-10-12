import { Button, useToast } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  id?: string;
  imageSrc: string | StaticImageData;
  title: string;
  price: string;
  brand: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageSrc,
  title,
  price,
  brand,
}) => {
  const toast = useToast();

  return (
    <div className="max-w-sm w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
      <Link href={`/products/${id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            alt="Product Image"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm font-bold text-gray-400">{brand}</p>
          <span className="text-xl text-white">${price}</span>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            bg={"green.500"}
            onClick={() =>
              toast({
                title: "Agregado al carrito",
                description:
                  "Podes mirar tus articulos agregados en el carrito",
                status: "success",
                duration: 3000,
              })
            }
          >
            <FaShoppingCart color="black" size={50} />
          </Button>

          <button className="bg-blue-800 p-2 rounded-md w-full ml-2 text-xs text-white flex justify-center items-center border border-black shadow-lg hover:bg-blue-600 transition duration-150">
            <Link href={`/products/${id}`}>Comprar</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
