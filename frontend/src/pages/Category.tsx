import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import type { Ad } from "../@types/types";
import AdCard from "../components/AdCard";
import { ADS_BY_CATEGORY_QUERY } from "../graphql/categoryQueries";

export function Category() {
  const [message, setMessage] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ adsByCategory: Ad[] }>(ADS_BY_CATEGORY_QUERY, {
    variables: { categoryId: Number(id) },
  });
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
  }

  return (
    <div className="page-content">
      <h2>Annonces de la catégorie Test</h2>
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
