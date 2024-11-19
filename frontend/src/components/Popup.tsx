import { useMutation } from "@apollo/client";
import type { MouseEvent } from "react";
import type { Ad } from "../@types/types";
import { DELETE_AD_MUTATION } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";

type EditAdFormProps = {
  isVisible: boolean;
  selectedAd: Ad;
  onClose: () => void;
};

export function Popup({ selectedAd, onClose }: EditAdFormProps) {
  const navigate = useNavigate();

  const [deleteAd, { error: deleteAdError }] = useMutation(DELETE_AD_MUTATION);

  const handleDeleteAd = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await deleteAd({
        variables: { deleteAdId: selectedAd.id },
      });
      console.log(response.data?.deleteAd);
      navigate("/");
    } catch (error) {
      console.log(deleteAdError);
      console.error("Failed to delete ad:", error);
    }
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <h1>Supprimer l&rsquo;annonce</h1>
        <p className="warning">Voulez-vous vraiment supprimer cette annonce&nbsp;?</p>
        <div className="modal-footer">
          <button className="button" type="button" onClick={handleDeleteAd}>
            Confirmer
          </button>
          <button className="button" type="button" onClick={onClose}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
