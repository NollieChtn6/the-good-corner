import { useEffect } from "react";

import Layout from "./components/Layout/Layout";
import { store } from "./store/storeIndex";

import "./App.css";

function App() {
	const fetchAds = store.adsStore((state) => state.fetchAds);
	const fetchCategories = store.categoriesStore(
		(state) => state.fetchCategories,
	);

	useEffect(() => {
		const loadData = async () => {
			await fetchAds();
			await fetchCategories();
		};
		loadData();
	}, [fetchAds, fetchCategories]);

	return <Layout />;
}

export default App;
