import React from "react";

export function ImagePopup({ card, onClose }) {

  return (
    <div className={`popup open-picture-popup ${card ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__picture-container" onClick={e => e.stopPropagation()}>
        <img className="popup__image" src={card ? card.link : ""} alt={card ? card.name : ""} />
        <h3 className="popup__picture-description">{card ? card.name : ""}</h3>
        <button
          className="popup__close-button popup__close-picture-show"
          type="button" onClick={onClose}
        ></button>
      </div>
    </div>
  )

}