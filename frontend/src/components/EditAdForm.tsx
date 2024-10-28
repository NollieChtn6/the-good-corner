import { useState, type FormEvent } from "react";
import { store } from "../store/storeIndex";
import type { Ad, UpdateAdFormData } from "../@types/types";

type EditAdFormProps = {
	isVisible: boolean;
	selectedAd: Ad;
	onClose: () => void;
	onSave: (updatedAd: UpdateAdFormData) => void;
};

const EditAdForm = ({ selectedAd, onClose, onSave }: EditAdFormProps) => {
	const tags = store.tagsStore((state) => state.tags);
	const categories = store.categoriesStore((state) => state.categories);

	const [formData, setFormData] = useState<UpdateAdFormData>({
		id: selectedAd.id,
		title: selectedAd.title,
		description: selectedAd.description,
		owner: selectedAd.owner,
		price: selectedAd.price,
		pictureUrl: selectedAd.pictureUrl,
		location: selectedAd.location,
		category: selectedAd.category ? selectedAd.category.id : null,
		tags: selectedAd.tags.map((tag) => tag.id),
	});

	const handleInputChange = (
		field: keyof UpdateAdFormData,
		value: string | number | number[] | null,
	) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const handleTagsSelection = (tagId: number) => {
		setFormData((prevData) => ({
			...prevData,
			tags: prevData.tags.includes(tagId)
				? prevData.tags.filter((id) => id !== tagId)
				: [...prevData.tags, tagId],
		}));
	};

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await onSave(formData);
	};

	return (
		<div className="modal">
			<h1>Modifier l&rsquo;annonce</h1>
			<form onSubmit={handleFormSubmit}>
				<label>
					Titre de l&rsquo;annonce :
					<input
						className="text-field"
						name="title"
						required
						value={formData.title}
						onChange={(e) => handleInputChange("title", e.target.value)}
					/>
				</label>
				<label>
					Description :
					<textarea
						className="text-field"
						name="description"
						rows={4}
						required
						value={formData.description}
						onChange={(e) => handleInputChange("description", e.target.value)}
					/>
				</label>
				<label>
					Prix :
					<input
						className="text-field"
						type="number"
						name="price"
						required
						value={formData.price}
						onChange={(e) => handleInputChange("price", Number(e.target.value))}
					/>
				</label>
				<label>
					Catégorie :
					<select
						value={formData.category ?? 0}
						onChange={(e) =>
							handleInputChange("category", Number(e.target.value) || null)
						}
						className="select-field"
					>
						<option disabled value={0}>
							Sélectionner une catégorie
						</option>
						{categories.map((category) => (
							<option value={category.id} key={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="">Tags :</label>
				<div className="tags-container">
					{tags.map((tag) => (
						<div key={tag.id}>
							<input
								type="checkbox"
								checked={formData.tags.includes(tag.id)}
								onChange={() => handleTagsSelection(tag.id)}
							/>
							{tag.label}
						</div>
					))}
				</div>
				<div className="modal-footer">
					<button className="button" type="submit">
						Enregistrer
					</button>
					<button className="button" type="button" onClick={onClose}>
						Annuler
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditAdForm;
