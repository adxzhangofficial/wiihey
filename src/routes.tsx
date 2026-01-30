import { createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import App from './App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import('./pages/Home').then(m => ({ Component: m.default })),
      },
      {
        path: 'about',
        lazy: () => import('./pages/About').then(m => ({ Component: m.default })),
      },
      {
        path: 'products',
        lazy: () => import('./pages/Products').then(m => ({ Component: m.default })),
      },
      {
        path: 'products/:category',
        lazy: () => import('./pages/ProductCategory').then(m => ({ Component: m.default })),
      },
      {
        path: 'solutions',
        lazy: () => import('./pages/Solutions').then(m => ({ Component: m.default })),
      },
      {
        path: 'solutions/:id',
        lazy: () => import('./pages/SolutionDetail').then(m => ({ Component: m.default })),
      },
      {
        path: 'cases',
        lazy: () => import('./pages/Cases').then(m => ({ Component: m.default })),
      },
      {
        path: 'contact',
        lazy: () => import('./pages/Contact').then(m => ({ Component: m.default })),
      },
    ],
  },
];

// Use HashRouter for GitHub Pages compatibility
export const router = createHashRouter(routes);
