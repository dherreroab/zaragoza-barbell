import CookiePolicy from "./components/CookiePolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LegalNotice from "./components/LegalNotice";
import Faqs from "./components/Faqs";
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
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/legal-notice',
    element: <LegalNotice />
  },
  {
    path: '/faqs',
    element: <Faqs />
  }
];

export default AppRoutes;
