import React from 'react';
import { Link } from 'react-router';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/85ed609e458eb05b9ebdb6835c1cf98f40f3ca6d.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { name: 'Inicio', href: '/' },
      { name: 'Catálogo', href: '/catalogo' },
      { name: 'Contacto', href: '/contacto' },
    ],
    legal: [
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/makerj3d', ariaLabel: 'Síguenos en Instagram' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/makerj3d', ariaLabel: 'Síguenos en Facebook' },
  ];

  return (
    <footer className="bg-foreground text-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img src={logo} alt="MakerJ3D" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-background/80 leading-relaxed">
              Productos únicos y personalizados creados con tecnología de impresión 3D.
              Dale vida a tus ideas con MakerJ3D.
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-primary p-2 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mapa del Sitio */}
          <div>
            <h3 className="mb-4">Mapa del Sitio</h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@makerj3d.com"
                  className="text-sm text-background/80 hover:text-background transition-colors duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:underline"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@makerj3d.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+573001234567"
                  className="text-sm text-background/80 hover:text-background transition-colors duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:underline"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +57 300 123 4567
                </a>
              </li>
              <li>
                <p className="text-sm text-background/80 flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Bogotá, Colombia
                </p>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-sm text-background/60">
            © {currentYear} MakerJ3D. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
