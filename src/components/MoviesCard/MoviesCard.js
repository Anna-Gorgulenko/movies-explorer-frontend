import React from "react"
import "./MoviesCard.css"

/*временно подставляю картинки для отображения в верстке */
import avatar from "../../images/AnnaCard.png"

function MoviesCard() {
  return (
    <>
      <li className="card">
        {/* карточка вставлена временно для разметки верстки */}
        <img className="card__photo" src={avatar} alt="фотокарточка фильма" />
        <div className="card__container">
          <div className="card__title-container">
            <h2 className="card__title">Бег это свобода</h2>
            <span className="card__time">150</span>
          </div>
          <button type="button" className="card__delete-button"></button>
        </div>
      </li>

      <li className="card">
        {/* карточка вставлена временно для разметки верстки */}
        <img className="card__photo" src={avatar} alt="фотокарточка фильма" />
        <div className="card__container">
          <div className="card__title-container">
            <h2 className="card__title">Бег это свобода</h2>
            <span className="card__time">150</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
