import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'catalogo', Component: Catalog },
      { path: 'producto/:id', Component: ProductDetail },
      { path: 'contacto', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
