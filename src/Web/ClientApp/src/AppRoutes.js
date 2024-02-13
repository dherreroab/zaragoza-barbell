import CookiePolicy from "./components/CookiePolicy";
import Home from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/cookies-policy',
    element: <CookiePolicy />
  }
];

export default AppRoutes;
