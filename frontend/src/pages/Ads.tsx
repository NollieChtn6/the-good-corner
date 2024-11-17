import { useQuery } from "@apollo/client";
import type { Ad } from "../@types/types";
import AdCard from "../components/AdCard";
import { ADS_QUERY } from "../graphql/adQueries";

function AllAds() {
  const { data, loading, error } = useQuery<{ ads: Ad[] }>(ADS_QUERY);
  const ads = data?.ads ?? [];

  if (loading) {
    return <p>Chargement en cours...</p>;
  }
  if (error) {
    return <p>Une erreur est survenue.</p>;
  }

  return (
    <div>
      <h2>Toutes les annonces</h2>
      <section className="recent-ads">
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
    </div>
  );
}

export default AllAds;
