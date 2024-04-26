import ProductCard from "@/components/product_card";
import { products } from "@/middleware/data";

export default function Page() {
  return (
    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
