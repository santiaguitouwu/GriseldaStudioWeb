import {ImageWithFallback} from './figma/ImageWithFallback';
import {Button} from "./ui/button";
import {Card} from "./ui/card";
import {Producto, formatPrice} from "../data/store";

interface ProductCardProps {
    product: Producto,
    onViewDetail: (productId: string) => void,
    key?: string
}

export function ProductCard({product, onViewDetail, key}: ProductCardProps) {
    return (
        <Card
            onClick={() => onViewDetail(product.id)}
            className="group cursor-pointer overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-300"
        >
            <div className="aspect-[3/4] overflow-hidden relative">
                <ImageWithFallback
                    src={product.imagenes_producto[0]}
                    alt={product.nombre_producto}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.soldOut && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="bg-white text-black px-4 py-2 transform -rotate-12 shadow-lg">
                            <span className="text-3xl font-bold tracking-wider uppercase">
                                Sold Out
                            </span>
                        </div>
                    </div>
                )}
                {product.coleccionAnterior && !product.soldOut && (
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs tracking-wide">
                        Colección Anterior
                    </div>
                )}
            </div>

            <div className="p-4 space-y-3">
                <h3 className="text-lg tracking-wide">
                    {product.nombre_producto}
                </h3>

                <p className="text-xl">
                    {formatPrice(product.precio)}
                </p>

                <Button
                    onClick={(e) => {
                        e.stopPropagation(); // evita doble trigger si hacen click en el botón
                        onViewDetail(product.id);
                    }}
                    variant="outline"
                    className="w-full border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                    Ver detalle
                </Button>
            </div>
        </Card>
    );
}
