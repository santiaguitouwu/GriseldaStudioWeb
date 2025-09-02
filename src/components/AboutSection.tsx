import { storeConfig } from "../data/store";
import { Card } from "./ui/card";
import { Truck, RefreshCcw, Clock, Instagram } from "lucide-react";

export function AboutSection() {
  const trustFeatures = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Envío Gratuito",
      description: "En compras superiores a $150.000"
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Cambios Fáciles",
      description: "30 días para cambios y devoluciones"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Entrega Rápida",
      description: "Pagos contraentrega en Cali, 2-5 días hábiles en el resto del país"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-wide">
            Sobre {storeConfig.nombre_tienda}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {storeConfig.descripcion_tienda_larga}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4 text-black">
                {feature.icon}
              </div>
              <h3 className="mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}