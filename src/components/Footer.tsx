import {storeConfig} from "../data/store";
import {Instagram} from "lucide-react";
import {ImWhatsapp} from "react-icons/im";
import {SiTiktok} from "react-icons/si";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const handleInstagramClick = () => {
        window.open(`https://instagram.com/${storeConfig.instagram.replace('@', '')}`, '_blank');
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${storeConfig.numeroWhatsappSinSignoMas}`, '_blank');
    };

    const handleTiktokClick = () => {
        window.open(`https://www.tiktok.com/${storeConfig.tiktok}`, '_blank');
    };

    // @ts-ignore
    return (
        <footer className="bg-black text-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-4">
                    <img
                        src={storeConfig.logo_url_footer}
                        alt={storeConfig.nombre_tienda}
                        className={`h-14 mx-auto transition-opacity duration-300 ease-in-out opacity-100`}
                        decoding="async"
                        draggable="false"
                    />
                    <p className="text-gray-300 max-w-2xl mx-auto py-2">
                        Diseño en cada prenda.
                    </p>
                </div>

                <div
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                    <button
                        onClick={handleInstagramClick}
                        className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
                    >
                        <Instagram className="w-5 h-5"/>
                        {/*<span>INSTAGRAM</span>*/}
                    </button>

                    <button
                        onClick={handleWhatsAppClick}
                        className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
                    >
                        <ImWhatsapp className="w-5 h-5"/>
                        {/*<span>WhatsApp</span>*/}
                    </button>
                    <button
                        onClick={handleTiktokClick}
                        className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
                    >
                        <SiTiktok className="w-5 h-5"/>
                        {/*<span>TikTok</span>*/}
                    </button>
                </div>

                <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6 font-kiln"
                     style={{fontFamily: "ui-sans-serif, system-ui, sans-serif"}}>
                    <p>{currentYear} {storeConfig.nombre_tienda}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}