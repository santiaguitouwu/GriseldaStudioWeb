import { ProductCard } from "./ProductCard";
import { productos } from "../data/store";

interface ProductGridProps {
  onViewDetail: (productId: string) => void;
}

export function ProductGrid({ onViewDetail }: ProductGridProps) {
  return (
    <section id="productos" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 tracking-wide">
            Nuestra Colección
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre piezas únicas diseñadas para resaltar tu estilo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 md:gap-8">
          {productos.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={onViewDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}