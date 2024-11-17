import { useParams, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import type { Ad } from "../@types/types";
import { ArrowLeft, Pencil, MapPin, Trash2 } from "lucide-react";
import { AD_BY_ID_QUERY } from "../graphql/adQueries";
import { useQuery } from "@apollo/client";

const AdDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ adById: Ad }>(AD_BY_ID_QUERY, {
    variables: { adByIdId: Number(id) },
  });

  const ad = data?.adById;

  // const [editFormIsVisible, setEditFormIsVisible] = useState<boolean>(false);

  if (!ad) return <p>Annonce non trouvée</p>;
  if (loading) return <p>Chargement de l&rsquo;annonce en cours...</p>;
  if (error) return <p>Une erreur est survenue lors du chargement de l&rsquo;annonce.</p>;

  const formattedCreationDate = DateTime.fromISO(ad.createdAt).toLocaleString(DateTime.DATE_FULL);

  // const handleSave = async (updatedAd: UpdateAdFormData) => {
  //   console.log("Mise à jour de l'annonce avec les données suivantes :", updatedAd);
  //   console.log("ID de l'annonce :", ad.id);
  //   await updateAd(ad.id, updatedAd);
  //   setEditFormIsVisible(false);
  // };

  return (
    <div className="page-content">
      <div className="btn-container">
        <button className="button back-btn" onClick={() => navigate(-1)} type="button">
          <ArrowLeft /> Retour
        </button>
      </div>
      <div className="ad-details-card">
        <h1 className="ad-title">{ad.title}</h1>
        <div className="ad-details-meta">
          <p className="ad-owner">
            Annonce publiée par <strong>{ad.owner}</strong> dans <strong>{ad.category.name}</strong>
          </p>
          <p className="ad-location">
            <MapPin />
            {ad.location}
          </p>
        </div>
        <div className="ad-details-image-container">
          <img className="ad-details-image" src={ad.pictureUrl} alt={ad.title} />
        </div>
        <div className="ad-details-description-container">
          <p className="ad-description">{ad.description}</p>
        </div>
        {/* <div className="tags-container">
          {ad.tags.map((tag) => (
            <TagItem key={tag.id} tag={tag} />
          ))}
        </div> */}

        <div className="ad-details-meta">
          <p className="ad-price">{ad.price}&nbsp;€</p>
          <p className="ad-timestamp">Annonce ajoutée le&nbsp;: {formattedCreationDate} </p>
        </div>
        <div className="ad-details-actions">
          <button className="button" type="button">
            <Pencil size={16} className="icon edit-icon" /> Modifier
          </button>
          <button className="button" type="button">
            <Trash2 size={16} className="icon delete-icon" /> Supprimer
          </button>
        </div>
      </div>
      {/* {editFormIsVisible && (
        <EditAdForm
          isVisible={editFormIsVisible}
          selectedAd={ad}
          onClose={() => setEditFormIsVisible(false)}
          onSave={handleSave}
        />
      )} */}
    </div>
  );
};

export default AdDetails;
