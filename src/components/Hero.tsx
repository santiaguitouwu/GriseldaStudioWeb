import { storeConfig } from "../data/store";
import { Button } from "./ui/button";

interface HeroProps {
    onViewProductsClick: () => void;
}

export function Hero({ onViewProductsClick }: HeroProps) {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image con <picture> */}
            <div className="absolute inset-0">
                <picture>
                    {/* Desktop 16:9 */}
                    <source
                        media="(min-width: 768px)"
                        srcSet="https://res.cloudinary.com/dpwzpx39s/image/upload/v1756829656/header_griselda_zcwx8x.jpg"
                    />
                    {/* Mobile 9:16 */}
                    <img
                        src="https://res.cloudinary.com/dpwzpx39s/image/upload/v1756840416/header_griselda_movil_wmgdiw.jpg"
                        alt="Modelos elegantes de Griselda Studio"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <h2 className="text-4xl md:text-6xl mb-6 tracking-wide">
                    {storeConfig.eslogan_corto}
                </h2>
                <Button
                    onClick={onViewProductsClick}
                    className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                    Ver productos
                </Button>
            </div>
        </section>
    );
}
