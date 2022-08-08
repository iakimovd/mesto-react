import React, { useState } from "react";
import '../index.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { ImagePopup } from "./ImagePopup";
import { Main } from './Main';
import { PopupWithForm } from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonName="Сохранить"
        children={
          <fieldset className="popup__inputs">
            <input
              className="popup__input popup__input_type_avatar"
              id="avatar-input"
              type="url"
              name="avatarlink"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error" id="avatar-input-error"></span>
          </fieldset>
        }
      />

      <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonName="Сохранить"
        children={
          <>
            <fieldset className="popup__inputs">
              <input
                className="popup__input popup__input_type_name"
                id="name-input"
                type="text"
                name="name"
                placeholder="Имя"
                required
                minLength="7"
                maxLength="40"
              />
              <span className="popup__input-error" id="name-input-error"></span>
            </fieldset>
            <fieldset className="popup__inputs">
              <input
                className="popup__input popup__input_type_job"
                id="job-input"
                type="text"
                name="job"
                placeholder="Профессия"
                required
                minLength="7"
                maxLength="200"
              />
              <span className="popup__input-error" id="job-input-error"></span>
            </fieldset>
          </>
        }
      />

      <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonName="Создать"
        children={
          <>
            <fieldset className="popup__inputs">
              <input
                className="popup__input popup__input_type_card-name"
                id="card-name-input"
                type="text"
                name="cardname"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="popup__input-error" id="card-name-input-error"></span>
            </fieldset>
            <fieldset className="popup__inputs">
              <input
                className="popup__input popup__input_type_link"
                id="link-input"
                type="url"
                name="cardlink"
                placeholder="Ссылка на картинку"
                required
                pattern="https://.*"
              />
              <span className="popup__input-error" id="link-input-error"></span>
            </fieldset>
          </>
        }
      />

      <div className="popup delete-card-popup">
        <div className="popup__container popup__container_delete-card">
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="popup__form" name="delete-card-form" noValidate>
            <button className="popup__save-button" type="submit">Да</button>
          </form>
          <button
            className="popup__close-button popup__close-button_add-new-card"
            type="button"
          ></button>
        </div>
      </div>

    </div >
  );
}

export default App;
