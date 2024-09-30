import Header from "./components/Header/Header";
import LatestAds from "./components/LatestAds/LatestAds";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<main className="main-content">
				<LatestAds />
			</main>
		</>
	);
}

export default App;
