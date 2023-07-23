import React from "react"
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import "./Form.css"

function Form({ link, linkText, question, title, buttonText, children }) {
  return (
    <div className="form">
      <div className="form__container">
        <Link to="/" className="form__logo">
          <img src={logo} alt="логотип приложения" />
        </Link>
        <h3 className="form__title">{title}</h3>
        <form className="form__content" id="form" novalidate>
          {children}
          <button className="form__button form__button-save" type="submit">
            {buttonText}
          </button>
        </form>
        <p className="form__text">
          {question}
          <a href={link} className="form__link">
            {linkText}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Form
