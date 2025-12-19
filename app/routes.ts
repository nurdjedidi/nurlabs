import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("mentions-legales", "routes/mentions-legales.tsx"),
  route("confidentialite", "routes/confidentialite.tsx"),
] satisfies RouteConfig;

