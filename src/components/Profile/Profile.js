import React from "react"
import "./Profile.css"

function Profile() {
  return (
    <>
      <section className="profile">
        <h3 className="profile__title">Привет, Анна!</h3>
        <form id="form" className="profile__form" noValidate>
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              name="name"
              id="name"
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="name"
              required
            />
            <span className="profile__input-error"></span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              name="email"
              id="email"
              type="email"
              placeholder="email"
              required
            />
            <span className="profile__input-error"></span>
          </label>
          <button type="submit" className="profile__button-save">
            Редактировать
          </button>
          <button type="button" className="profile__button-exit">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  )
}

export default Profile
