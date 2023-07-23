import React from "react"
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" id="form">
        <div className="search__input-container">
          <input
            className="search__input"
            name="query"
            id="search"
            type="text"
            placeholder="Фильм"
            required
          ></input>
        </div>
        <button className="search__button" type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox />
      <span className="search__form-error">Нужно ввести ключевое слово</span>
      <div className="search__border-bottom"></div>
    </section>
  )
}

export default SearchForm
