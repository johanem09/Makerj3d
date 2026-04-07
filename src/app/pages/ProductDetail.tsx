import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ShoppingCart, Heart, ArrowLeft, Share2, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const productData: Record<string, any> = {
    '1': {
      name: 'Lámpara Luna 3D',
      price: 85000,
      category: 'Lámparas',
      description:
        'Hermosa lámpara con forma de luna realizada con impresión 3D de alta precisión. Perfecto para crear un ambiente único en tu habitación. Incluye luz LED regulable con control remoto.',
      images: [
        'https://images.unsplash.com/photo-1679590523322-6e4c1be9ba68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBsYW1wJTIwbW9vbnxlbnwxfHx8fDE3NzU1MzM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1563640369881-e4892ef606da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHwzZCUyMHByaW50ZWQlMjBsYW1wJTIwbW9vbnxlbnwxfHx8fDE3NzU1MzM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      features: [
        'Impresión 3D de alta calidad',
        'Luz LED regulable',
        'Control remoto incluido',
        'Acabado profesional',
        'Varios tamaños disponibles',
      ],
      specifications: {
        Material: 'PLA de alta calidad',
        Tamaños: '15cm, 20cm, 25cm de diámetro',
        Iluminación: 'LED RGB regulable',
        'Tiempo de producción': '3-5 días hábiles',
      },
    },
    '2': {
      name: 'Figura T-Rex Personalizada',
      price: 120000,
      category: 'Figuras',
      description:
        'Impresionante figura de T-Rex en 3D con detalles increíbles. Ideal para coleccionistas y amantes de los dinosaurios. Puede personalizarse en color y tamaño.',
      images: [
        'https://images.unsplash.com/photo-1707735325033-af8b8ad6a01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHwzZCUyMHByaW50aW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc1NTMzNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1706895247302-20d321119c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHwzZCUyMHByaW50aW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc1NTMzNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      features: [
        'Alto nivel de detalle',
        'Personalizable en color',
        'Múltiples tamaños disponibles',
        'Base incluida',
        'Acabado premium',
      ],
      specifications: {
        Material: 'PLA/ABS premium',
        Tamaños: '15cm, 25cm, 35cm de altura',
        Colores: 'Cualquier color disponible',
        'Tiempo de producción': '5-7 días hábiles',
      },
    },
  };

  const product = productData[id || '1'] || productData['1'];

  const handleContact = () => {
    const message = encodeURIComponent(
      `Hola! Estoy interesado en el producto: ${product.name}`
    );
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <ImageWithFallback
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        selectedImage === index
                          ? 'border-primary'
                          : 'border-transparent hover:border-border'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} - Vista ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h1 className="mb-4">{product.name}</h1>

                <div className="flex items-center gap-4">
                  <p className="text-3xl text-primary">
                    ${product.price.toLocaleString('es-CO')} COP
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleContact}
                  className="flex-1 gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Contactar para Comprar
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? 'border-primary text-primary' : ''}
                  aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`}
                  />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleShare}
                  aria-label="Compartir producto"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <Card className="p-6">
                <h3 className="mb-4">Características</h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Specifications */}
              <Card className="p-6">
                <h3 className="mb-4">Especificaciones</h3>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-border last:border-0"
                    >
                      <dt className="text-muted-foreground">{key}</dt>
                      <dd>{value as string}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">También te puede interesar</h2>
          <div className="text-center py-8">
            <Button variant="outline" onClick={() => navigate('/catalogo')}>
              Ver Más Productos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
