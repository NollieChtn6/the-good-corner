import { useQuery } from "@apollo/client";
import { type FormEvent, useState } from "react";
import type { Ad, Category, Tag, UpdateAdFormData } from "../@types/types";
import { CATEGORIES_AND_TAGS_QUERY } from "../graphql/queries";

type EditAdFormProps = {
  isVisible: boolean;
  selectedAd: Ad;
  onClose: () => void;
  onSave: (updatedAd: UpdateAdFormData) => void;
};

const EditAdForm = ({ selectedAd, onClose, onSave }: EditAdFormProps) => {
  const { data } = useQuery<{ categories: Category[]; tags: Tag[] }>(CATEGORIES_AND_TAGS_QUERY);
  const categories = data?.categories ?? [];
  const tags = data?.tags ?? [];

  const [formData, setFormData] = useState<UpdateAdFormData>({
    title: selectedAd.title,
    description: selectedAd.description,
    owner: selectedAd.owner,
    price: selectedAd.price,
    pictureUrl: selectedAd.pictureUrl,
    location: selectedAd.location,
    category: selectedAd.category.id,
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
    <div className="overlay">
      <div className="form-container">
        <h1>Modifier l&rsquo;annonce</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-input">
            <label htmlFor="title" className="label">
              Titre de l&rsquo;annonce :
            </label>
            <input
              className="text-field"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="description">
              Description :{" "}
            </label>
            <textarea
              className="text-field"
              id="description"
              name="description"
              rows={4}
              required
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="price">
              Prix :
            </label>
            <input
              className="text-field"
              type="number"
              id="price"
              name="price"
              required
              value={formData.price}
              onChange={(e) => handleInputChange("price", Number(e.target.value))}
            />
          </div>
          <div className="form-input">
            <label className="label" htmlFor="category">
              Catégorie :
            </label>
            <select
              name="category"
              id="category"
              value={formData.category ?? 0}
              onChange={(e) => handleInputChange("category", Number(e.target.value) || null)}
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
          </div>
          <div className="form-input">
            <label htmlFor="tags">Tags :</label>
            <div className="tags-container">
              {tags.map((tag) => (
                <div key={tag.id} className="tag-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.tags.includes(tag.id)}
                    onChange={() => handleTagsSelection(tag.id)}
                  />
                  <label htmlFor={`tag-${tag.id}`}>{tag.label}</label>
                </div>
              ))}
            </div>
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
    </div>
  );
};

export default EditAdForm;
