import { ChevronRight } from "lucide-react";

interface ProductBreadcrumbProps {
  categoria: string;
  nombreProducto: string;
  onHomeClick: () => void;
}

export function ProductBreadcrumb({ categoria, nombreProducto, onHomeClick }: ProductBreadcrumbProps) {
  return (
    <nav className="py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <button 
              onClick={onHomeClick}
              className="hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/20 rounded px-1"
            >
              Inicio
            </button>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>{categoria}</span>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-black truncate max-w-xs md:max-w-sm">
              {nombreProducto}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}