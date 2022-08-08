import React, { useState } from "react";
import api from "../utils/Api";
import { Card } from "./Card";

export function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch(err => { console.log(err) });
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-section">
          <img className="profile__avatar"
            src={userAvatar}
            alt="Аватар пользователя" />
          <button className="profile__avatar-edit-button" type="button" onClick={onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} />
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace} />
      </section>

      <section className="elements-section">
        <ul className="elements">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            )
          }
          )}
        </ul>
      </section>

    </main>
  )
} 