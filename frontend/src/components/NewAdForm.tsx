import { useState, type FormEvent } from "react";
import { store } from "../store/storeIndex";
import type { CreateAdFormData } from "../@types/types";

function NewAdForm() {
	const createAd = store.adsStore((state) => state.createAd);

	const tags = store.tagsStore((state) => state.tags);
	const categories = store.categoriesStore((state) => state.categories);

	const [formData, setFormData] = useState<CreateAdFormData>({
		title: "",
		description: "",
		owner: "",
		price: 0,
		pictureUrl: "",
		location: "",
		category: null,
		tags: [],
	});

	const handleInputChange = (
		field: keyof CreateAdFormData,
		value: string | number | number[],
	) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const handleTagsSelection = (tagId: number) => {
		setFormData((prevData) => ({
			...prevData,
			tags: prevData.tags?.includes(tagId)
				? prevData.tags.filter((id) => id !== tagId)
				: [...(prevData.tags || []), tagId],
		}));
	};

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			console.log("Data", formData);
			await createAd(formData);
		} catch (error) {
			console.error("Failed to create ad:", error);
		}
	};

	return (
		<div className="form-container">
			<h1>Ajouter une annonce</h1>
			<form onSubmit={handleFormSubmit}>
				<label>
					Titre de l&rsquo;annonce&nbsp;:
					<br />
					<input
						className="text-field"
						name="title"
						required
						onChange={(e) => handleInputChange("title", e.target.value)}
					/>
				</label>
				<br />
				<label>
					Description de l&rsquo;objet&nbsp;:
					<br />
					<textarea
						className="text-field"
						name="description"
						rows={6}
						cols={50}
						required
						onChange={(e) => handleInputChange("description", e.target.value)}
					/>
				</label>
				<br />
				<label>
					Prix de vente&nbsp;:
					<br />
					<input
						className="text-field"
						type="number"
						name="price"
						required
						onChange={(e) => handleInputChange("price", Number(e.target.value))}
					/>
				</label>
				<br />
				<label>
					Catégorie&nbsp;:
					<br />
					<select
						name="category"
						onChange={(e) =>
							handleInputChange("category", Number(e.target.value))
						}
						value={formData?.category as number}
						className="select-field"
					>
						<option disabled value={0}>
							Choisir...
						</option>
						{categories.map((category) => (
							<option value={category.id} key={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</label>
				<br />
				<label htmlFor="">
					Tags&nbsp;:
					<br />
					<div className="tags-container">
						{tags.map((tag) => (
							<div key={tag.id} className="tag-checkbox">
								<input
									type="checkbox"
									id={`tag-${tag.id}`}
									value={tag.id}
									checked={formData.tags.includes(tag.id)}
									onChange={() => handleTagsSelection(tag.id)}
								/>
								<label htmlFor={`tag-${tag.id}`}>{tag.label}</label>
							</div>
						))}
					</div>
				</label>
				<br />
				<label>
					Votre nom&nbsp;:
					<br />
					<input
						className="text-field"
						name="owner"
						required
						onChange={(e) => handleInputChange("owner", e.target.value)}
					/>
				</label>
				<br />
				<label>
					Ville&nbsp;:
					<br />
					<input
						className="text-field"
						name="location"
						required
						onChange={(e) => handleInputChange("location", e.target.value)}
					/>
				</label>
				<br />
				<label>
					Url de votre image&nbsp;:
					<br />
					<input
						className="text-field"
						name="pictureUrl"
						required
						onChange={(e) => handleInputChange("pictureUrl", e.target.value)}
					/>
				</label>
				<br />
				<button className="button" type="submit">
					Créer
				</button>
			</form>
		</div>
	);
}

export default NewAdForm;
