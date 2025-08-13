// For example, if you're writing your own simple config system:
import { lazy } from 'react';


export const routes = [
  {
    path: '/',
    element: lazy(() => import('./app')),
  },
  {
    path: '/project-cost-estimator',
    element: lazy(() => import('./components/project-cost-estimator/project-cost-estimator')),
  },
];
