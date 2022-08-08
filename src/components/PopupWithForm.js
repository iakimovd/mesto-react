import React from 'react';

export function PopupWithForm({ title, name, children, buttonName, isOpen, onClose }) {

  return (
    <div className={`popup ${name}-popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" name="edit-profile-form" noValidate>
          {children}
          <button className="popup__save-button" type="submit">{buttonName}</button>
        </form>
        <button className="popup__close-button" type="button" onClick={onClose}></button>
      </div>
    </div>
  )
}