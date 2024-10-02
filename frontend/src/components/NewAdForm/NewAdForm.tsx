import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";

import type { Category } from "../../@types/types";

function NewAdForm() {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const response = await axios.get<Category[]>(
				"http://localhost:3000/categories",
			);
			setCategories(response.data);
		};
		fetchCategories();
	}, []);

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form as HTMLFormElement);
		console.log(formData);
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
				Prix de vente&nbsp;:
				<br />
				<input className="text-field" name="price" />
			</label>
			<br />
			<select name="category">
				<option disabled selected>
					Choisir...
				</option>
				{categories.map((category) => (
					<option value={category.id} key={category.id}>
						{category.name}
					</option>
				))}
			</select>
			<button className="button" type="submit">
				Créer
			</button>
		</form>
	);
}

export default NewAdForm;
