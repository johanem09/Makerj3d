import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { ShoppingCart, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category,
  featured = false,
  onClick,
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Lógica para agregar a favoritos
  };

  return (
    <Card className="group relative" onClick={onClick}>
      {/* Imagen del producto */}
      <div className="aspect-square overflow-hidden bg-muted relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge de destacado */}
        {featured && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
            Destacado
          </div>
        )}

        {/* Botón de favorito */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Agregar a favoritos"
        >
          <Heart className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Información del producto */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {category}
          </p>
          <h3 className="mt-1">{name}</h3>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-primary">
            ${price.toLocaleString('es-CO')} COP
          </p>

          <Button
            variant="primary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="gap-2"
            aria-label={`Ver detalles de ${name}`}
          >
            <ShoppingCart className="w-4 h-4" />
            Ver
          </Button>
        </div>
      </div>
    </Card>
  );
};
