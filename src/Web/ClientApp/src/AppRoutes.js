import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
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
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
