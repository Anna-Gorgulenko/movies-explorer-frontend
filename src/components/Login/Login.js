import React from "react"
import Form from "../Form/Form"
import "../Form/Form.css"

function Login() {
  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
    >
      <label className="form__label">
        E-mail
        <input
          className="form__input"
          name="email"
          placeholder="email"
          id="email"
          type="email"
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
          placeholder="password"
          id="password"
          type="password"
          required
        />
        <span className="form__input-error">Введите пароль</span>
      </label>
    </Form>
  )
}

export default Login
