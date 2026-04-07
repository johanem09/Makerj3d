import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Home, Search } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          <h1 className="text-9xl mb-4 bg-gradient-to-br from-primary to-[#5B21B6] bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="mb-4">Página no encontrada</h2>
          <p className="text-muted-foreground">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={() => navigate('/')} className="gap-2">
            <Home className="w-5 h-5" />
            Ir al Inicio
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/catalogo')}
            className="gap-2"
          >
            <Search className="w-5 h-5" />
            Ver Catálogo
          </Button>
        </div>
      </div>
    </div>
  );
};
