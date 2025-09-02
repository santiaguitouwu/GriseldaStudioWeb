import { Button } from "./ui/button";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selectedSize, onSizeSelect }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm text-gray-700">
        Talla disponibles
      </label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            size="sm"
            onClick={() => onSizeSelect(size)}
            className={`min-w-[44px] h-11 transition-all duration-200 ${
              selectedSize === size
                ? "bg-black text-white border-black"
                : "border-gray-300 text-black hover:border-black hover:bg-black hover:text-white"
            }`}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}