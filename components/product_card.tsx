import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="w-full max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <Link href={product.href}>
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={800}
          height={800}
          className="object-cover w-full h-56"
        />
      </Link>
      <div className="flex items-center justify-between p-2">
        <Link href={product.href}>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white font-mono">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-mono font-bold">
            {product.price}
          </p>
        </Link>
        <button className="text-gray-200 bg-gray-800 rounded-lg px-2 py-1">
          <CiShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
