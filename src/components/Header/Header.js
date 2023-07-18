import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import "./Header.css"
import logo from "../../images/logo.svg"
import account from "../../images/profileAnna.svg"
import mobileMenu from "../../images/menu-button.svg"
import Navigation from "../Navigation/Navigation"

function Header() {
  const location = useLocation()

  // Временная функция для проверки отображения первого хедера
  const showOneHeader = () => {
    const { pathname } = location
    return pathname === "/"
  }

  // Временная функция для проверки отображения второго хедера
  const showTwoHeader = () => {
    const { pathname } = location
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    )
  }

  const [isClicked, setIsClicked] = React.useState(false)

  function handleOpenMobileMenu() {
    setIsClicked(true)
  }

  function handleCloseMobileMenu() {
    setIsClicked(false)
  }

  return (
    <>
      {showOneHeader() && (
        <header className="header" id="header">
          <Link to="/" className="form__logo">
            <img src={logo} alt="логотип сайта" />
          </Link>
          <div className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      )}

      {showTwoHeader() && (
        <header className="header header_color">
          <Link to="/" className="form__logo">
            <img src={logo} alt="логотип приложения" />
          </Link>
          <div className="header__button-container_films">
            <NavLink
              to="/movies"
              className="header__button"
              activeClassName="header__button_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__button"
              activeClassName="header__button_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-container">
            <Link to="/profile" className="header__button-account">
              <img
                className="header__account-icon"
                src={account}
                alt="изображение иконки аккаунта в приложении"
              />
            </Link>
            <button
              className="header__menu-button"
              onClick={handleOpenMobileMenu}
            >
              <img src={mobileMenu} alt="кнопка мобильного меню" />
            </button>
          </div>
          {isClicked ? (
            <Navigation handleCloseMobileMenu={handleCloseMobileMenu} />
          ) : (
            ""
          )}
        </header>
      )}
    </>
  )
}

export default Header
