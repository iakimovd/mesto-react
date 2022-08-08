import React from "react";

export function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="card-template">
      <li className="element">
        <button className="element__picture-button" type="button" onClick={handleClick}>
          <img className="element__image"
            src={card.link}
            alt={card.name} />
        </button>
        <div className="element__description">
          <h3 className="element__title">{card.name}</h3>
          <div className="element__like-section">
            <button className="element__like-button" type="button"></button>
            <p className="element__like-counter">{card.likes.length}</p>
          </div>
        </div>
        <button className="element__delete-button" type="button"></button>
      </li>
    </div>
  )
}