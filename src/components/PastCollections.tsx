import { ProductCard } from "./ProductCard";
import { coleccionesAnteriores } from "../data/store";

interface PastCollectionsProps {
  onViewDetail: (productId: string) => void;
}

export function PastCollections({ onViewDetail }: PastCollectionsProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 tracking-wide">
            Colecciones Anteriores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre piezas únicas de nuestras colecciones pasadas, cada una con su propia historia y estilo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coleccionesAnteriores.map((product) => (
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