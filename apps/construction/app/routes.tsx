import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index('./app.tsx'),
  route('about', './components/project-cost-estimator/about.tsx'),
  route('project-cost-estimator', './components/project-cost-estimator/project-cost-estimator.tsx'),
] satisfies RouteConfig;