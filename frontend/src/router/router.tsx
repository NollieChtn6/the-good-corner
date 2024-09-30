import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LatestAds from "../components/LatestAds/LatestAds";
import About from "../components/About/About";
import AdDetails from "../components/AdDetails/AdDetails";

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
				path: "/about",
				element: <About />,
			},
		],
	},
]);

export default router;
