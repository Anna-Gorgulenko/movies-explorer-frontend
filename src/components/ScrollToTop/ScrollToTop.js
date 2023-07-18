import React from "react"
import "./ScrollToTop.css"
import { Link } from "react-scroll"
import buttonArrowTop from "../../images/up-arrow.svg"

function ScrollToTop() {
  return (
    <Link to="header" className="scroll" smooth={true} duration={480}>
      <img
        className="scroll__button-top"
        src={buttonArrowTop}
        alt="изображение стрелки вверх для скрола страницы"
      />
    </Link>
  )
}

export default ScrollToTop
