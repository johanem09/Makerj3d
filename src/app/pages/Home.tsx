import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, Package, Palette, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: '1',
      name: 'Lámpara Luna 3D',
      price: 85000,
      category: 'Lámparas',
      image: 'https://images.unsplash.com/photo-1679590523322-6e4c1be9ba68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBsYW1wJTIwbW9vbnxlbnwxfHx8fDE3NzU1MzM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: '2',
      name: 'Figura T-Rex Personalizada',
      price: 120000,
      category: 'Figuras',
      image: 'https://images.unsplash.com/photo-1707735325033-af8b8ad6a01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHwzZCUyMHByaW50aW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc1NTMzNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: '3',
      name: 'Corazón Decorativo',
      price: 45000,
      category: 'Decoración',
      image: 'https://images.unsplash.com/photo-1772452859015-37647ec83ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZWNvcmF0aXZlJTIwM2QlMjBwcmludHxlbnwxfHx8fDE3NzU1MzM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: '4',
      name: 'Decoración Halloween',
      price: 65000,
      category: 'Decoración',
      image: 'https://images.unsplash.com/photo-1767498051835-b5249a2d1daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwM2QlMjBwcmludHxlbnwxfHx8fDE3NzU1MzM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: '5',
      name: 'Figuras Personalizadas',
      price: 95000,
      category: 'Figuras',
      image: 'https://images.unsplash.com/photo-1706895247302-20d321119c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHwzZCUyMHByaW50aW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc1NTMzNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: '6',
      name: 'Set de Decoración',
      price: 150000,
      category: 'Decoración',
      image: 'https://images.unsplash.com/photo-1760446410955-86c0446b9be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHwzZCUyMHByaW50aW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc1NTMzNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'Diseños Únicos',
      description: 'Cada producto es creado especialmente para ti con la más alta calidad.',
    },
    {
      icon: Package,
      title: 'Personalización',
      description: 'Adapta cada diseño a tus gustos y necesidades específicas.',
    },
    {
      icon: Palette,
      title: 'Variedad de Colores',
      description: 'Elige entre una amplia gama de colores para tu producto ideal.',
    },
    {
      icon: Zap,
      title: 'Entrega Rápida',
      description: 'Producción eficiente y envíos rápidos a toda Colombia.',
    },
  ];

  const handleProductClick = (productId: string) => {
    navigate(`/producto/${productId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#6D28D9] to-[#5B21B6] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtem0wIDZoLTZ2Nmg2di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Da vida a tus ideas con{' '}
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                impresión 3D
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
              Productos únicos y personalizados creados con la mejor tecnología de impresión 3D.
              Lámparas, figuras, decoración y más.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/catalogo')}
                className="bg-white text-primary hover:bg-purple-50"
              >
                Ver Catálogo
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contacto')}
                className="border-white text-white hover:bg-white/10"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">¿Por qué elegir MakerJ3D?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinamos creatividad, tecnología y calidad para ofrecerte productos excepcionales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2">Productos Destacados</h2>
              <p className="text-muted-foreground">
                Descubre nuestros diseños más populares
              </p>
            </div>

            <Button
              variant="outline"
              onClick={() => navigate('/catalogo')}
              className="hidden sm:inline-flex"
            >
              Ver Todo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" onClick={() => navigate('/catalogo')}>
              Ver Todo el Catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-[#5B21B6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            ¿Tienes una idea en mente?
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Trabajamos contigo para crear productos personalizados únicos.
            Cuéntanos tu idea y la hacemos realidad.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/contacto')}
            className="bg-white text-primary hover:bg-purple-50"
          >
            Personalizar Producto
          </Button>
        </div>
      </section>
    </div>
  );
};
