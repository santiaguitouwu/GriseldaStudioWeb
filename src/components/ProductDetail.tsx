import {useState} from "react";
import {ProductBreadcrumb} from "./ProductBreadcrumb";
import {ProductGallery} from "./ProductGallery";
import {SizeSelector} from "./SizeSelector";
import {ProductCard} from "./ProductCard";
import {Button} from "./ui/button";
import {Card} from "./ui/card";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "./ui/collapsible";
import {ChevronDown} from "lucide-react";
import {Producto, productos, coleccionesAnteriores, formatPrice, generateWhatsAppUrl} from "../data/store";
import {Footer} from "./Footer";

interface ProductDetailProps {
    product: Producto;
    onBackToHome: () => void;
    onViewDetail: (productId: string) => void;
}

export function ProductDetail({product, onBackToHome, onViewDetail}: ProductDetailProps) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [materialsOpen, setMaterialsOpen] = useState(false);
    const [careOpen, setCareOpen] = useState(false);
    const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

    // Get related products (exclude current product)
    const allProducts = [...productos, ...coleccionesAnteriores];
    const relatedProducts = allProducts
        .filter(p => p.id !== product.id && p.categoria === product.categoria)
        .slice(0, 3);

    const handleWhatsAppPurchase = () => {
        const url = generateWhatsAppUrl(product.nombre_producto, selectedSize || undefined);
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            <ProductBreadcrumb
                categoria={product.categoria}
                nombreProducto={product.nombre_producto}
                onHomeClick={onBackToHome}
            />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Gallery */}
                    <div>
                        <ProductGallery
                            images={product.imagenes_producto}
                            productName={product.nombre_producto}
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl lg:text-4xl mb-4 tracking-wide">
                                {product.nombre_producto}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {product.descripcion_breve}
                            </p>
                        </div>

                        <div>
                            <p className="text-3xl text-black">
                                {formatPrice(product.precio)}
                            </p>
                        </div>

                        {!product.soldOut && (
                            <>
                                <SizeSelector
                                    sizes={product.tallas_disponibles}
                                    selectedSize={selectedSize}
                                    onSizeSelect={setSelectedSize}
                                />

                                <Button
                                    onClick={handleWhatsAppPurchase}
                                    disabled={!selectedSize}
                                    className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Comprar por WhatsApp
                                </Button>

                                {!selectedSize && (
                                    <p className="text-sm text-gray-500 text-center">
                                        Selecciona una talla para continuar
                                    </p>
                                )}
                            </>
                        )}

                        {product.soldOut && (
                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <h3 className="text-xl mb-2 tracking-wide">
                                    Producto Agotado
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Este producto se encuentra agotado actualmente.
                                    Contáctanos para saber cuando estará disponible nuevamente.
                                </p>
                                <Button
                                    onClick={() => {
                                        const message = `Hola, me interesa el producto "${product.nombre_producto}". ¿Cuándo estará disponible nuevamente?`;
                                        const encodedMessage = encodeURIComponent(message);
                                        window.open(`https://wa.me/573001234567?text=${encodedMessage}`, '_blank');
                                    }}
                                    variant="outline"
                                    className="border-black text-black hover:bg-black hover:text-white"
                                >
                                    Consultar Disponibilidad
                                </Button>
                            </div>
                        )}

                        {product.coleccionAnterior && (
                            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                                <p className="text-sm text-amber-800">
                                    <strong>Colección Anterior:</strong> Esta pieza pertenece a una de nuestras
                                    colecciones pasadas y tiene disponibilidad limitada.
                                </p>
                            </div>
                        )}

                        {/* Collapsible Details */}
                        <div className="space-y-4 pt-8">
                            <Collapsible open={materialsOpen} onOpenChange={setMaterialsOpen}>
                                <CollapsibleTrigger
                                    className="flex items-center justify-between w-full p-4 border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                                    <span>Materiales</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${materialsOpen ? 'rotate-180' : ''}`}/>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pb-4">
                                    <p className="text-gray-600">
                                        100% Algodón premium de alta calidad. Tejido suave y transpirable que mantiene
                                        su forma y color lavado tras lavado.
                                    </p>
                                </CollapsibleContent>
                            </Collapsible>

                            <Collapsible open={careOpen} onOpenChange={setCareOpen}>
                                <CollapsibleTrigger
                                    className="flex items-center justify-between w-full p-4 border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                                    <span>Cuidados</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${careOpen ? 'rotate-180' : ''}`}/>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pb-4">
                                    <p className="text-gray-600">
                                        Lavar a mano o en ciclo delicado con agua fría. No usar blanqueador. Secar al
                                        aire libre. Planchar a temperatura media si es necesario.
                                    </p>
                                </CollapsibleContent>
                            </Collapsible>

                            <Collapsible open={sizeGuideOpen} onOpenChange={setSizeGuideOpen}>
                                <CollapsibleTrigger
                                    className="flex items-center justify-between w-full p-4 border-t border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                                    <span>Guía de Tallas</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${sizeGuideOpen ? 'rotate-180' : ''}`}/>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pb-4">
                                    <div className="text-gray-600 space-y-2">
                                        <p>XS: 80-84 cm (busto), 60-64 cm (cintura)</p>
                                        <p>S: 84-88 cm (busto), 64-68 cm (cintura)</p>
                                        <p>M: 88-92 cm (busto), 68-72 cm (cintura)</p>
                                        <p>L: 92-96 cm (busto), 72-76 cm (cintura)</p>
                                        <p>XL: 96-100 cm (busto), 76-80 cm (cintura)</p>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-2xl mb-8 text-center tracking-wide">
                            Productos Relacionados
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard
                                    key={relatedProduct.id}
                                    product={relatedProduct}
                                    onViewDetail={onViewDetail}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}