// Datos mock para la tienda Griselda Studio

export const storeConfig = {
    nombre_tienda: "Griselda Studio",
    logo_url_prin: "/img/logos/griselda_logo1.png", // Se usará placeholder centrado
    logo_url_sec: "/img/logos/griselda_logo2.png",
    logo_url_footer: "/img/logos/griselda_logo2_blanco.png",
    eslogan_corto: "Nacidos de la recocha",
    descripcion_tienda_larga: "Griselda Studio nace de la pasión por crear piezas atemporales que reflejan la elegancia y sofisticación de la sujetos modernos. Cada prenda está cuidadosamente diseñada para destacar la belleza natural y la confianza de quien la porta. Nuestra filosofía se basa en la calidad, el diseño y la versatilidad, creando un guardarropa esencial que trasciende tendencias y estaciones.",
    instagram: "@griseldastudio",
    tiktok: "@griseldastudio",
    numeroWhatsappSinSignoMas: "573001234567"
};

export interface Producto {
    id: string;
    nombre_producto: string;
    precio: number;
    descripcion_breve: string;
    categoria: string;
    tallas_disponibles: string[];
    imagenes_producto: string[];
    soldOut?: boolean;
    coleccionAnterior?: boolean;
}

export const productos: Producto[] = [
    {
        id: "1",
        nombre_producto: "Camiseta Sade",
        precio: 89000,
        descripcion_breve: "Camisa de corte clásico en algodón premium, perfecta para cualquier ocasión.",
        categoria: "Camisetas",
        tallas_disponibles: ["S", "M", "L", "XL"],
        soldOut: true,
        imagenes_producto: [
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756832774/sade_camiseta1_mtrjv5.jpg",
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756832828/sade_camiseta2_n76ird.jpg"
        ]
    },
    {
        id: "2",
        nombre_producto: "Camiseta Balotelli",
        precio: 89000,
        descripcion_breve: "Camisa de corte clásico en algodón premium, perfecta para cualquier ocasión.",
        categoria: "Camisetas",
        tallas_disponibles: ["XS", "S", "M", "L"],
        imagenes_producto: [
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756832992/balloteli_camiseta1_obectk.jpg",
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756832992/balloteli_camiseta2_nzmo0l.jpg"
        ]
    }
];

export const coleccionesAnteriores: Producto[] = [
    {
        id: "past-1",
        nombre_producto: "Camiseta Namibia",
        precio: 89000,
        descripcion_breve: "Camisa de corte clásico en algodón premium, perfecta para cualquier ocasión.",
        categoria: "Camisetas",
        tallas_disponibles: ["S", "M", "L"],
        coleccionAnterior: true,
        soldOut: true,
        imagenes_producto: [
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756834751/namibia_camiseta1_vfcamn.jpg",
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756834751/namibia_camiseta2_y7paug.jpg"
        ]
    },
    {
        id: "past-2",
        nombre_producto: "Camiseta Griselda Blue",
        precio: 89000,
        descripcion_breve: "Camisa de corte clásico en algodón premium, perfecta para cualquier ocasión.",
        categoria: "Camisetas",
        tallas_disponibles: ["XS", "S", "M"],
        coleccionAnterior: true,
        soldOut: true,
        imagenes_producto: [
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756834751/camiseta_griselda_blue_pxtbub.jpg"
        ]
    },
    {
        id: "past-3",
        nombre_producto: "Camiseta Griselda Pink",
        precio: 89000,
        descripcion_breve: "Camisa de corte clásico en algodón premium, perfecta para cualquier ocasión.",
        categoria: "Blusas",
        tallas_disponibles: ["S", "M", "L", "XL"],
        coleccionAnterior: true,
        soldOut: true,
        imagenes_producto: [
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756834752/camiseta_griselda_pink_yma8ea.jpg"
        ]
    },
    {
        id: "past-4",
        nombre_producto: "Sudadera Rosa",
        precio: 95000,
        descripcion_breve: "Pantalón de corte recto en tela de alta calidad, versátil y cómodo para el día a día.",
        categoria: "Pantalones",
        coleccionAnterior: true,
        tallas_disponibles: ["S", "M", "L", "XL"],
        imagenes_producto: [
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756833272/sudadera_rosa2_a6kcun.jpg",
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756833273/sudadera_rosa1_ntropz.jpg"
        ]
    },
    {
        id: "past-5",
        nombre_producto: "Camiseta Jesus Christ",
        precio: 95000,
        descripcion_breve: "Camisa de corte clásico en algodón premium, perfecta para cualquier ocasión.",
        categoria: "Pantalones",
        coleccionAnterior: true,
        tallas_disponibles: ["S", "M", "L", "XL"],
        imagenes_producto: [
            "https://res.cloudinary.com/dpwzpx39s/image/upload/v1756834751/camiseta_jesus_wh4ijx.jpg"
        ]
    },
];

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};

export const generateWhatsAppUrl = (producto: string, talla?: string): string => {
    const baseMessage = `Hola, quiero comprar el producto: ${producto}`;
    const tallaMessage = talla ? `, talla: ${talla}` : "";
    const fullMessage = `${baseMessage}${tallaMessage}. ¿Está disponible?`;
    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/${storeConfig.numeroWhatsappSinSignoMas}?text=${encodedMessage}`;
};