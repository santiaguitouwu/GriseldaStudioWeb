import { useState } from "react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 relative group">
        <ImageWithFallback
          src={images[selectedImageIndex]}
          alt={`${productName} - Vista ${selectedImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows - Only show if there are multiple images */}
        {images.length > 1 && (
          <>
            <Button
              onClick={previousImage}
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 border-black/20 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-10 w-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={nextImage}
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 border-black/20 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-10 w-10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Image indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    selectedImageIndex === index ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                selectedImageIndex === index
                  ? "border-black"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}