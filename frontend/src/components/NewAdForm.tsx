import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";

import type { Category } from "../@types/types";

function NewAdForm() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);

	const handleCategorySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategoryId(Number(e.target.value));
	};

	useEffect(() => {
		const fetchCategories = async () => {
			const response = await axios.get<Category[]>(
				"http://localhost:3000/categories",
			);
			setCategories(response.data);
		};
		fetchCategories();
	}, []);

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form as HTMLFormElement);

		const date = new Date().toISOString();
		console.log("Submission date:", date);
		formData.append("createdAt", date);

		const formJson = Object.fromEntries(formData.entries());
		try {
			const response = await axios.post(
				"http://localhost:3000/ads/create",
				formJson,
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label>
				Titre de l&rsquo;annonce&nbsp;:
				<br />
				<input className="text-field" name="title" />
			</label>
			<br />
			<label>
				Description de l&rsquo;objet&nbsp;:
				<br />
				<input className="text-field" type="text" name="description" />
			</label>
			<br />
			<label>
				Prix de vente&nbsp;:
				<br />
				<input className="text-field" type="number" name="price" />
			</label>
			<br />
			<label>
				Catégorie&nbsp;:
				<br />
				<select
					name="category"
					onChange={handleCategorySelection}
					value={selectedCategoryId}
				>
					<option disabled>Choisir...</option>
					{categories.map((category) => (
						<option value={category.id} key={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</label>
			<br />
			<label>
				Nom&nbsp;:
				<br />
				<input className="text-field" name="owner" />
			</label>
			<br />
			<label>
				Ville&nbsp;:
				<br />
				<input className="text-field" name="location" />
			</label>
			<br />
			<label>
				Url de votre image&nbsp;:
				<br />
				<input className="text-field" name="picture" />
			</label>
			<button className="button" type="submit">
				Créer
			</button>
		</form>
	);
}

export default NewAdForm;
