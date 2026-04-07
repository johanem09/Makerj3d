import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { Filter } from 'lucide-react';
import { Button } from '../components/Button';

export const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Lámparas', 'Figuras', 'Decoración', 'Corazones'];

  const allProducts = [
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
      category: 'Corazones',
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
    {
      id: '7',
      name: 'Lámpara Personalizada',
      price: 75000,
      category: 'Lámparas',
      image: 'https://images.unsplash.com/photo-1563640369881-e4892ef606da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHwzZCUyMHByaW50ZWQlMjBsYW1wJTIwbW9vbnxlbnwxfHx8fDE3NzU1MzM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: '8',
      name: 'Figura Decorativa',
      price: 80000,
      category: 'Figuras',
      image: 'https://images.unsplash.com/photo-1743056586194-837401d75e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHwzZCUyMHByaW50aW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc1NTMzNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: '9',
      name: 'Corazón Iluminado',
      price: 55000,
      category: 'Corazones',
      image: 'https://images.unsplash.com/photo-1767498051845-f04c53089e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZWNvcmF0aXZlJTIwM2QlMjBwcmludHxlbnwxfHx8fDE3NzU1MzM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const handleProductClick = (productId: string) => {
    navigate(`/producto/${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-[#5B21B6] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Catálogo de Productos</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Explora nuestra colección completa de productos personalizados en impresión 3D
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg">Categorías</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}{' '}
              {selectedCategory !== 'Todos' && `en ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No se encontraron productos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Podemos crear un diseño personalizado especialmente para ti
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/contacto')}
          >
            Solicitar Personalización
          </Button>
        </div>
      </section>
    </div>
  );
};
