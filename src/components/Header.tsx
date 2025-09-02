import {storeConfig} from "../data/store";
import {Instagram} from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import { SiTiktok } from "react-icons/si";
import {useEffect, useRef, useState} from "react";

interface HeaderProps {
    onLogoClick?: () => void;
}

export function Header({onLogoClick}: HeaderProps) {
    const handleInstagramClick = () => {
        window.open(`https://instagram.com/${storeConfig.instagram.replace('@', '')}`, '_blank');
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${storeConfig.numeroWhatsappSinSignoMas}`, '_blank');
    };

    const handleTiktokClick = () => {
        window.open(`https://www.tiktok.com/${storeConfig.tiktok}`, '_blank');
    };

    const [isTop, setIsTop] = useState(true);
    const FADE_MS = 300; // debe coincidir con la clase Tailwind duration-300
    const [opacity, setOpacity] = useState(1); // 1 = visible, 0 = oculto
    const queuedSrcRef = useRef<string | null>(null);

    const [currentSrc, setCurrentSrc] = useState(
        isTop ? storeConfig.logo_url_sec : storeConfig.logo_url_prin
    );
    const fadeOutTO = useRef<number | null>(null);
    const fadeInTO = useRef<number | null>(null);

    // set inicial + listener de scroll (ya lo tenías)
    useEffect(() => {
        const handleScroll = () => setIsTop(window.scrollY === 0);
        handleScroll();
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

// cuando cambia isTop, pre-carga el logo y hace fade-out
    useEffect(() => {
        const nextSrc = isTop ? storeConfig.logo_url_sec : storeConfig.logo_url_prin;
        if (nextSrc === currentSrc) return;

        // limpiar timeouts anteriores
        if (fadeOutTO.current) {
            clearTimeout(fadeOutTO.current);
            fadeOutTO.current = null;
        }
        if (fadeInTO.current) {
            clearTimeout(fadeInTO.current);
            fadeInTO.current = null;
        }

        // precarga
        const img = new Image();
        img.src = nextSrc;

        const startSwap = () => {
            // 1) fade out
            setOpacity(0);
            fadeOutTO.current = window.setTimeout(() => {
                // 2) cambiar src cuando ya está en 0
                setCurrentSrc(nextSrc);
                // 3) siguiente tick: fade in
                fadeInTO.current = window.setTimeout(() => {
                    setOpacity(1);
                    fadeInTO.current = null;
                }, 0);
                fadeOutTO.current = null;
            }, FADE_MS);
        };

        if (img.complete) {
            startSwap();
        } else {
            img.onload = startSwap;
            img.onerror = () => {
                // si falla la carga, cambiamos igual y evitamos quedarnos en 0
                setCurrentSrc(nextSrc);
                setOpacity(1);
            };
        }

        return () => {
            if (fadeOutTO.current) {
                clearTimeout(fadeOutTO.current);
                fadeOutTO.current = null;
            }
            if (fadeInTO.current) {
                clearTimeout(fadeInTO.current);
                fadeInTO.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTop, storeConfig.logo_url_prin, storeConfig.logo_url_sec]); // currentSrc NO va aquí para evitar bucles

// al terminar el fade-out, cambiamos el src y hacemos fade-in
    const handleTransitionEnd = () => {
        if (opacity === 0 && queuedSrcRef.current) {
            setCurrentSrc(queuedSrcRef.current);
            queuedSrcRef.current = null;
            // siguiente frame → subimos opacidad para el fade-in
            requestAnimationFrame(() => setOpacity(1));
        }
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-black/10 h-16">
            <div className="w-full h-full flex items-center justify-between px-4">
                <div className="flex-1"/>

                <button
                    onClick={onLogoClick}
                    className="transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-black/20 rounded"
                    aria-label={storeConfig.nombre_tienda}
                >
                    <img
                        src={currentSrc}
                        alt={storeConfig.nombre_tienda}
                        className={`h-10 mx-auto transition-opacity duration-300 ease-in-out ${opacity ? "opacity-100" : "opacity-0"}`}
                        decoding="async"
                        draggable="false"
                    />
                </button>

                <div className="flex-1 flex justify-end items-center space-x-4">
                    <button
                        onClick={handleInstagramClick}
                        className="p-2 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-black/20 rounded"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5"/>
                    </button>
                    <button
                        onClick={handleWhatsAppClick}
                        className="p-2 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-black/20 rounded"
                        aria-label="WhatsApp"
                    >
                        <ImWhatsapp className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleTiktokClick}
                        className="p-2 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-black/20 rounded"
                        aria-label="WhatsApp"
                    >
                        <SiTiktok className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}