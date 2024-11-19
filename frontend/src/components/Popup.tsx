import type { MouseEvent } from "react";
import type { Ad } from "../@types/types";

type EditAdFormProps = {
  isVisible: boolean;
  selectedAd: Ad;
  onClose: () => void;
};

export function Popup({ selectedAd, onClose }: EditAdFormProps) {
  const handleDeleteAd = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Ad Id:", selectedAd.id);
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
