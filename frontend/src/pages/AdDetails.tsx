import { useMutation, useQuery } from "@apollo/client";
import { ArrowLeft, MapPin, Pencil, Trash2 } from "lucide-react";
import { DateTime } from "luxon";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import type { Ad } from "../@types/types";
import type { UpdateAdFormData } from "../@types/types";
import EditAdForm from "../components/EditAdForm";
import { TagItem } from "../components/TagItem";
import { Popup } from "../components/Popup";
import { UPDATE_AD_MUTATION } from "../graphql/mutations";
import { AD_BY_ID_QUERY } from "../graphql/queries";

const AdDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ adById: Ad }>(AD_BY_ID_QUERY, {
    variables: { adByIdId: Number(id) },
  });
  const [updateAd, { data: sumbittedData, loading: updatingAd, error: updateAdError }] =
    useMutation(UPDATE_AD_MUTATION);

  const ad = data?.adById;

  const [editFormIsVisible, setEditFormIsVisible] = useState<boolean>(false);
  const [popupIsVisible, setPopupIsVisible] = useState<boolean>(false);

  if (!ad) return <p>Annonce non trouvée</p>;
  if (loading) return <p>Chargement de l&rsquo;annonce en cours...</p>;
  if (error) return <p>Une erreur est survenue lors du chargement de l&rsquo;annonce.</p>;

  const formattedCreationDate = DateTime.fromISO(ad.createdAt).toLocaleString(DateTime.DATE_FULL);

  const handleSave = async (updatedAd: UpdateAdFormData) => {
    try {
      const response = await updateAd({
        variables: { data: updatedAd, replaceAdByIdId: ad.id },
      });
      console.log("Ad updated successfully:", response.data?.replaceAdById);
      setEditFormIsVisible(false);
    } catch (error) {
      console.log(updateAdError);
      console.error("Failed to update ad:", error);
    }
  };

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
            Annonce publiée par <span className="data">{ad.owner}</span> dans{" "}
            <span className="data link">
              <NavLink to={`/categories/${ad.category.id}`}>{ad.category.name}</NavLink>
            </span>
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
        <div className="tags-container">
          {ad.tags.map((tag) => (
            <TagItem key={tag.id} tag={tag} />
          ))}
        </div>

        <div className="ad-details-meta">
          <p className="ad-price">{ad.price}&nbsp;€</p>
          <p className="ad-timestamp">Annonce ajoutée le&nbsp;: {formattedCreationDate} </p>
        </div>
        <div className="ad-details-actions">
          <button className="button" type="button" onClick={() => setEditFormIsVisible(true)}>
            <Pencil size={16} className="icon edit-icon" /> Modifier
          </button>
          <button className="button" type="button" onClick={() => setPopupIsVisible(true)}>
            <Trash2 size={16} className="icon delete-icon" /> Supprimer
          </button>
        </div>
      </div>
      {editFormIsVisible && (
        <EditAdForm
          isVisible={editFormIsVisible}
          selectedAd={ad}
          onClose={() => setEditFormIsVisible(false)}
          onSave={handleSave}
          isUpdating={updatingAd}
        />
      )}
      {popupIsVisible && (
        <Popup
          isVisible={editFormIsVisible}
          selectedAd={ad}
          onClose={() => setPopupIsVisible(false)}
        />
      )}
    </div>
  );
};

export default AdDetails;
