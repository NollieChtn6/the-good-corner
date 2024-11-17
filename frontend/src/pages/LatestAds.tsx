import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import type { Ad } from "../@types/types";
import AdCard from "../components/AdCard";
import { ADS_QUERY } from "../graphql/adQueries";

function LatestAds() {
  const { data, loading, error } = useQuery<{ ads: Ad[] }>(ADS_QUERY);
  const ads = data?.ads ?? [];

  if (loading) {
    return <p>Chargement en cours...</p>;
  }
  if (error) {
    return <p>Une erreur est survenue.</p>;
  }

  const latestAds = data?.ads?.slice(Math.max(ads.length - 9, 0)).reverse() || [];

  return (
    <>
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {latestAds.map((ad) => (
          <div key={ad.id}>
            <AdCard
              id={ad.id}
              title={ad.title}
              price={ad.price}
              pictureUrl={ad.pictureUrl}
              key={ad.id}
              location={ad.location}
            />
          </div>
        ))}
      </section>
      <div className="view-more-container">
        <Link to="/annonces" className="button button-primary">
          Voir toutes les annonces
        </Link>
      </div>
    </>
  );
}

export default LatestAds;
