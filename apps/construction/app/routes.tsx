// For example, if you're writing your own simple config system:
import { createBrowserRouter, RouteObject } from 'react-router';
import App from './app';
import ProjectCostEstimator from './components/project-cost-estimator/project-cost-estimator';
import ProjectCostEstimatorEdit from './components/project-cost-estimator/edit/index';
const routes: RouteObject[] = [
  // {
  //   path: '/',
  //   element: <App />,
  // },
  {
    path: '/',
    element: <ProjectCostEstimatorEdit />,
  },
  {
    path: '/project-cost-estimator',
    element: <ProjectCostEstimator />,
  },
  {
    path: '/edit',
    element: <ProjectCostEstimatorEdit />,
  }
];

export const router = createBrowserRouter(routes);
