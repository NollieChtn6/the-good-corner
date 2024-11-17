import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AdDetails from "../pages/AdDetails";
import AllAds from "../pages/Ads";
import { Category } from "../pages/Category";
import CreateNewAd from "../pages/CreateNewAd";
import LatestAds from "../pages/LatestAds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LatestAds />,
      },
      {
        path: "/annonces/",
        element: <AllAds />,
      },
      {
        path: "/annonces/:id",
        element: <AdDetails />,
      },
      {
        path: "/annonces/nouvelle-annonce",
        element: <CreateNewAd />,
      },
      {
        path: "/categories/:id",
        element: <Category />,
      },
    ],
  },
]);

export default router;
