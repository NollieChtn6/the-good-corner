import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import type { Ad } from "../@types/types";
import AdCard from "../components/AdCard";
import { ADS_BY_CATEGORY_QUERY } from "../graphql/queries";

export type CategoryName = string | null;

export function Category() {
  const [message, setMessage] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ adsByCategory: Ad[] }>(ADS_BY_CATEGORY_QUERY, {
    variables: { categoryId: Number(id) },
  });
  let categoryName = null;
  const ads = data?.adsByCategory ?? [];

  if (loading) {
    return <div>Chargement des annonces en cours...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Une erreur est survenue pendant le chargement des annonces.</div>;
  }
  if (ads.length === 0) {
    setMessage("Aucune annonce trouvée pour cette catégorie.");
  } else if (ads.length > 0) {
    categoryName = ads[0].category.name.toLowerCase();
  }

  return (
    <div className="page-content">
      <h2>Annonces de la catégorie&nbsp;: {categoryName}</h2>
      {message ? (
        <p>{message}</p>
      ) : (
        <section className="gallery">
          {ads.map((ad) => (
            <AdCard
              key={ad.id}
              id={ad.id}
              title={ad.title}
              price={ad.price}
              pictureUrl={ad.pictureUrl}
              location={ad.location}
            />
          ))}
        </section>
      )}
    </div>
  );
}
