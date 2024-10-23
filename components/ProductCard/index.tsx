import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import useCartStore from "@/store/cartStore";
import IProduct from "@/Models/Products";

const ProductCard: React.FC<IProduct> = (product) => {
  const { addItem } = useCartStore();

  const formatPrice = (price: string) => {
    const numberPrice = parseFloat(price);
    if (isNaN(numberPrice)) return "$0.00";
    return `$${numberPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;
  };

  const addToCart = () => {
    const cartItem = {
      id: product.id || "",
      name: product.name || "",
      price: product.price?.toString() || "0",
      brand: product.brand || "",
      picture:
        typeof product.picture === "string"
          ? product.picture
          : product.picture || "",
      quantity: 1,
    };

    addItem(cartItem);
    alert(`${product.name} fue agregado correctamente!`);
  };

  return (
    <div className="w-48 max-w-xs overflow-hidden bg-white rounded-md rounded-b-sm shadow-sm shadow-black">
      <div className="relative group">
        <Image
          width={1000}
          height={1000}
          className="object-cover w-full h-48 lg:h-80"
          src={product.picture}
          alt={product.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <button
              aria-label={`Agregar ${product.name} al carrito`}
              className="bg-gray-700 p-3 rounded-full flex items-center justify-center"
              onClick={addToCart}
            >
              <BsCart size={25} color="white" />
            </button>
          </div>
          <div>
            <Link
              href={`/products/${product.id}`}
              aria-label={`Ver detalles de ${product.name}`}
              className="bg-gray-700 p-3 rounded-full flex items-center justify-center"
            >
              <GoEye size={25} color="white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <Link href={`/products/${product.id}`}>
          <h1 className="text-xl text-gray-800 uppercase lg:text-2xl font-bold font-body2">
            {product.name}
          </h1>
        </Link>
        <p className="mt-1 text-sm text-gray-600 lg:text-lg font-body">
          {product.brand}
        </p>
        <p className="text-lg font-bold text-black lg:text-2xl font-body">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
