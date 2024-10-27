import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LatestAds from "../pages/LatestAds";
import AdDetails from "../pages/AdDetails";
import CreateNewAd from "../pages/CreateNewAd";
import AllAds from "../pages/Ads";

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
		],
	},
]);

export default router;
