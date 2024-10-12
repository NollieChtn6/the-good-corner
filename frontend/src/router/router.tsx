import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LatestAds from "../pages/LatestAds";
import AdDetails from "../pages/AdDetails";
import NewAdForm from "../components/NewAdForm";

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
				path: "/ads/:id",
				element: <AdDetails />,
			},
			{
				path: "/ads/create",
				element: <NewAdForm />,
			},
		],
	},
]);

export default router;
