import { useMutation, useQuery } from "@apollo/client";
import { type FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Category, Tag } from "../@types/types";
import type { CreateAdFormData } from "../@types/types";
import { CREATE_AD_MUTATION } from "../graphql/mutations";
import type { CreateAdMutationResult } from "../graphql/mutations";
import { CATEGORIES_AND_TAGS_QUERY } from "../graphql/queries";

function NewAdForm() {
  const { data } = useQuery<{ categories: Category[]; tags: Tag[] }>(CATEGORIES_AND_TAGS_QUERY);
  const [createAd, { data: sumbittedData, loading: creatingAd, error: createAdError }] =
    useMutation<CreateAdMutationResult>(CREATE_AD_MUTATION);
  const categories = data?.categories ?? [];
  const tags = data?.tags ?? [];
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CreateAdFormData>({
    title: "",
    description: "",
    owner: "",
    price: 0,
    pictureUrl: "",
    location: "",
    category: 0,
    tags: [],
  });

  const handleInputChange = (field: keyof CreateAdFormData, value: string | number | number[]) => {
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
      const response = await createAd({
        variables: { adInput: formData },
      });
      console.log("Ad created successfully:", response.data?.createAd);
    } catch (error) {
      console.error("Failed to create ad:", error);
    }
  };

  useEffect(() => {
    if (!sumbittedData) return;
    navigate(`/annonces/${sumbittedData.createAd.id}`);
  }, [sumbittedData, navigate]);

  return (
    <div className="form-container">
      <h1 className="form-title">Ajouter une annonce</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-input">
          <label className="label" htmlFor="title">
            Titre de l&rsquo;annonce&nbsp;:
          </label>
          <input
            className="text-field"
            name="title"
            id="title"
            required
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="description">
            Description de l&rsquo;objet&nbsp;:
          </label>
          <textarea
            className="text-field"
            name="description"
            id="description"
            rows={6}
            cols={50}
            required
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="price">
            Prix de vente&nbsp;:
          </label>
          <input
            className="text-field"
            type="number"
            name="price"
            id="price"
            required
            onChange={(e) => handleInputChange("price", Number(e.target.value))}
          />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="category">
            Catégorie&nbsp;:
          </label>
          <select
            name="category"
            id="category"
            onChange={(e) => handleInputChange("category", Number(e.target.value))}
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
        </div>
        <div>
          <label htmlFor="tags">Tags&nbsp;:</label>
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
        </div>
        <div className="form-input">
          <label htmlFor="owner">Votre nom&nbsp;:</label>
          <input
            className="text-field"
            id="owner"
            name="owner"
            required
            onChange={(e) => handleInputChange("owner", e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="location">
            Ville&nbsp;:
          </label>
          <input
            className="text-field"
            name="location"
            id="location"
            required
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="pictureUrl">
            Url de votre image&nbsp;:
          </label>
          <input
            className="text-field"
            name="pictureUrl"
            id="pictureUrl"
            required
            onChange={(e) => handleInputChange("pictureUrl", e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button className="button" type="submit" disabled={creatingAd}>
            {creatingAd ? "Création en cours..." : "Créer"}
          </button>
        </div>
        {createAdError && <p className="error">Une erreur est survenue. Veuillez réessayer.</p>}
      </form>
    </div>
  );
}

export default NewAdForm;
