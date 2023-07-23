import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
    >
      <label className="form__label">
        Имя
        <input
          className="form__input"
          name="name"
          id="name"
          type="text"
          minLength="2"
          maxLength="40"
          placeholder="Анна"
          required
        />
        <span className="form__input-error">Заполните поле</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          className="form__input"
          name="email"
          id="email"
          type="email"
          placeholder="anna@yandex.ru"
          required
        />
        <span className="form__input-error">
          Адрес электронной почты должен содержать символ "@".
        </span>
      </label>
      <label className="form__label">
        Пароль
        <input
          className="form__input"
          name="password"
          id="password"
          type="password"
          placeholder="пароль"
          required
        />
        <span className="form__input-error">Заполните поле</span>
      </label>
    </Form>
  )
}

export default Register
