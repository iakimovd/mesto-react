import React from "react";
import { PopupWithForm } from "./PopupWithForm";


export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      // @ts-ignore
      avatar: inputRef.current.value,
    });
  }

  React.useEffect(() => {
    // @ts-ignore
    inputRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isOpen} onClose={onClose} buttonName="Сохранить" onSubmit={handleSubmit}
      children={
        <fieldset className="popup__inputs">
          <input
            className="popup__input popup__input_type_avatar"
            id="avatar-input"
            type="url"
            name="avatarlink"
            placeholder="Ссылка на картинку"
            required
            ref={inputRef}
          />
          <span className="popup__input-error" id="avatar-input-error"></span>
        </fieldset>
      }
    />
  )
}