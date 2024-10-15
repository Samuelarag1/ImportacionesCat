import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { GoEye } from "react-icons/go";

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
  const formatPrice = (price: string) => {
    const numberPrice = parseFloat(price);
    return `$${numberPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;
  };

  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-sm shadow-black">
      <div className="relative group">
        {" "}
        <Image
          width={1000}
          height={1000}
          className="object-cover w-full h-48 lg:h-80"
          src={imageSrc}
          alt="NIKE AIR"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <Link
              href="#"
              className="bg-gray-700 p-3 rounded-full flex items-center justify-center"
            >
              <BsCart size={25} color="white" />
            </Link>
          </div>
          <div>
            <Link
              href={`/products/${id}`}
              className="bg-gray-700 p-3 rounded-full flex items-center justify-center"
            >
              <GoEye size={25} color="white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <Link href={`/products/${id}`}>
          <h1 className="text-xl text-gray-800 uppercase lg:text-2xl font-bold font-body2">
            {title}
          </h1>
        </Link>
        <p className="mt-1 text-sm text-gray-600 lg:text-lg font-body">
          {brand}
        </p>
        <p className="text-lg font-bold text-black lg:text-2xl font-body">
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
